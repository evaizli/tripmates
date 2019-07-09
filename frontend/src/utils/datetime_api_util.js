export const getDateNow = () => {
  const dateNow = new Date();
  return formatDateShort(dateNow);
};

export const parseDate = date => {
  if (date.length === 0) {
    return date;
  } else {
    if (typeof date === "object") {
      date = new Date(date).toISOString();
    }
    const parsedDate = date.split("T");
    return parsedDate[0];
  }
};

export const formatDateShort = oldDate => {
  const date = oldDate.getDate() < 10 ? `0${oldDate.getDate()}` : oldDate.getDate();
  const month = oldDate.getMonth() + 1 < 10 ? `0${oldDate.getMonth() + 1}` : oldDate.getMonth() + 1;
  const year = oldDate.getFullYear();
  return `${year}-${month}-${date}`;
};

export const formatDate = date => {
  const dateOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  
  let dateDup = new Date(date);
  dateDup.setHours(dateDup.getHours() + dateDup.getTimezoneOffset() / 60);
  dateDup = dateDup.toLocaleDateString("en-US", dateOptions);
  return dateDup;
};

export const formatTime = time => {
  const splitTime = time.split(":");
  const hours = splitTime[0] % 12 === 0 ? "12" : splitTime[0] % 12;
  const minutes = splitTime[1];
  const period = splitTime[0] < 12 ? "AM" : "PM";
  const formattedTime = `${hours}:${minutes} ${period}`;
  return formattedTime;
};

export const allDatesFinder = (tripStartDate, tripEndDate) => {
  const startWeek = startOfWeek(tripStartDate);
  const endWeek = endOfWeek(tripEndDate);
  const allDates = [[parseDate(startWeek.toISOString())]];
  let j = 0;

  let newDate = startWeek;
  for (let i = 1; newDate < endWeek; i++) {
    newDate = new Date(startWeek);
    newDate.setDate(newDate.getDate() + i);
    allDates[j].push(parseDate(newDate.toISOString()));
    if (allDates[j].length === 7 && newDate < endWeek) {
      allDates.push([]);
      j++;
    }
  }
  return allDates;
};

const startOfWeek = tripStartDate => {
  const startDateDup = new Date(tripStartDate);
  if (startDateDup.getDay() !== 0) {
    startDateDup.setDate(startDateDup.getDate() - startDateDup.getDay());
  }
  return startDateDup;
};

const endOfWeek = tripEndDate => {
  const endDateDup = new Date(tripEndDate);
  if (endDateDup.getDay() !== 6) {
    endDateDup.setDate(endDateDup.getDate() + (6 - endDateDup.getDay()));
  }
  return endDateDup;
};

export const sortEndDateDesc = (destinations) => {
  const destinationsDup = Object.assign([], destinations);
  const compareDateDesc = (a, b) => (a.endDate > b.endDate ? -1 : 1);
  return destinationsDup.sort(compareDateDesc);
};

export const sortStartDateAsc = (destinations) => {
  const destinationsDup = Object.assign([], destinations);
  const compareDateAsc = (a, b) => (a.startDate < b.startDate ? -1 : 1);
  return destinationsDup.sort(compareDateAsc);
};

export const sortStartTime = activities => {
  const activitiesDup = Object.assign([], activities);
  const compareTimeAsc = (a, b) => (a.startTime < b.startTime ? -1 : 1);
  return activitiesDup.sort(compareTimeAsc);
};

export const futureTripsFinder = (trips, destinations) => {
  const dateNow = getDateNow();
  let futureTrips = [];
  trips.forEach(trip => {
    const tripDestinations = Object.values(destinations[trip._id]);
    if (tripDestinations.length > 0) {
      const startDate = tripStartDateFinder(tripDestinations);
      if (startDate > dateNow) {
        futureTrips.push({
          name: trip.tripName,
          startDate,
          tripId: trip._id
        });
      }
    }
  });
  return sortTrips(futureTrips);
};

export const parseTrips = (trips, destinations) => {
  const dateNow = getDateNow();
  let [pastTrips, inProgressTrips, futureTrips, tentativeTrips]  = [[], [], [], []];

  trips.forEach(trip => {
    const tripDestinations = Object.values(destinations[trip._id]);
    if (tripDestinations.length === 0) {
      tentativeTrips.push(trip);
    } else {
      const startDate = tripStartDateFinder(tripDestinations);
      const endDate = tripEndDateFinder(tripDestinations);
      trip.startDate = startDate;
      if (startDate <= dateNow && endDate >= dateNow) {
        inProgressTrips.push(trip);
      } else if (startDate > dateNow) {
        futureTrips.push(trip);
      } else {
        pastTrips.push(trip);
      }
    }
  });
  
  pastTrips = sortTrips(pastTrips);
  inProgressTrips = sortTrips(inProgressTrips);
  futureTrips = sortTrips(futureTrips).concat(alphabetizeTrips(tentativeTrips));

  return { pastTrips, inProgressTrips, futureTrips };
};

const alphabetizeTrips = trips => {
  const tripsDup = Object.assign([], trips);
  const compareName = (a, b) => a.tripName.toLowerCase() < b.tripName.toLowerCase() ? -1 : 1;
  return tripsDup.sort(compareName);
};

const sortTrips = trips => {
  const tripsDup = Object.assign([], trips);
  const compareTrip = (a, b) => a.startDate < b.startDate ? -1 : 1 ;
  return tripsDup.sort(compareTrip);
};

export const tripStartDateFinder = (destinations) => {
  const destinationsSorted = sortStartDateAsc(destinations);
  const startDate = destinationsSorted[0].startDate;
  return startDate;
};

export const tripEndDateFinder = (destinations) => {
  const destinationsSorted = sortEndDateDesc(destinations);
  const endDate = destinationsSorted[0].endDate;
  return endDate;
};

