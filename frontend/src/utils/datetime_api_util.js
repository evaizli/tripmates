export const getDateNow = () => {
  const dateNow = new Date();
  const date = dateNow.getDate() < 10 ? `0${dateNow.getDate()}` : dateNow.getDate();
  const month = dateNow.getMonth() + 1 < 10 ? `0${dateNow.getMonth() + 1}` : dateNow.getMonth() + 1;
  const year = dateNow.getFullYear();
  return `${year}-${month}-${date}`;
}

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

export const inProgressTripsFinder = (trips) => {
  const dateNow = getDateNow();
  return trips.filter(trip => {
    const startDate = parseDate(new Date(sortStartDateAsc(trip.destinations)[0].startDate));
    const endDate = parseDate(new Date(sortEndDateDesc(trip.destinations)[0].endDate));
    return startDate <= dateNow && endDate >= dateNow;
  });
};

export const pastTripsFinder = (trips) => {
  const dateNow = getDateNow();
  return trips.filter(trip => {
    const endDate = parseDate(new Date(sortEndDateDesc(trip.destinations)[0].endDate));
    return endDate < dateNow;
  });
};

export const futureTripsFinder = (trips) => {
  const dateNow = getDateNow();
  let futureTrips = []
  trips.forEach(trip => {
    if (trip.destinations.length > 0) {
      const startDate = parseDate(new Date(sortStartDateAsc(trip.destinations)[0].startDate));
      if (startDate > dateNow) {
        trip["startDate"] = startDate;
        futureTrips.push(trip);
      }
    }
  });
  futureTrips = sortTrips(futureTrips);
  return futureTrips;
};

export const parseTrips = trips => {
  const dateNow = getDateNow();
  let pastTrips = [];
  let inProgressTrips = [];
  let futureTrips = [];
  let tentativeTrips = [];

  trips.forEach(trip => {
    if (trip.destinations.length === 0) {
      tentativeTrips.push(trip)
    } else {
      const startDate = parseDate(new Date(sortStartDateAsc(trip.destinations)[0].startDate));
      const endDate = parseDate(new Date(sortEndDateDesc(trip.destinations)[0].endDate));
      trip["startDate"] = startDate;
      if (startDate <= dateNow && endDate >= dateNow) {
        inProgressTrips.push(trip)
      } else if (startDate > dateNow) {
        futureTrips.push(trip)
      } else {
        pastTrips.push(trip)
      }
    }
  })
  
  pastTrips = sortTrips(pastTrips);
  inProgressTrips = sortTrips(inProgressTrips);
  futureTrips = sortTrips(futureTrips).concat(alphabetizeTrips(tentativeTrips));

  return { pastTrips, inProgressTrips, futureTrips }
}

const alphabetizeTrips = trips => {
  const tripsDup = Object.assign([], trips);
  const compareName = (a, b) => (a.tripName < b.tripName ? -1 : 1);
  return tripsDup.sort(compareName);
}

const sortTrips = trips => {
  const tripsDup = Object.assign([], trips);
  const compareTrip = (a, b) => a.startDate < b.startDate ? -1 : 1 ;
  return tripsDup.sort(compareTrip);
}

export const formatTime = (time) => {
  const splitTime = time.split(":");
  const hours = splitTime[0] <= 12 ? splitTime[0] : splitTime[0] % 12;
  const minutes = splitTime[1];
  const period = splitTime[0] <= 12 ? "AM" : "PM";
  const formattedTime = `${hours}:${minutes} ${period}`;
  return formattedTime;
};

export const formatDate = (date) => {
  const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const dateDup = new Date(date);
  dateDup.setHours(dateDup.getHours() + (dateDup.getTimezoneOffset() / 60));
  return dateDup.toLocaleDateString("en-US", dateOptions);
};

export const parseDate = (date) => {
  date = new Date(date).toISOString();
  const parsedDate = date.split("T");
  return parsedDate[0];
};

export const tripStartDateFinder = (destinations) => {
  const destinationsSorted = sortStartDateAsc(destinations);
  const startDate = formatDate(destinationsSorted[0].startDate);
  return startDate;
};

export const tripEndDateFinder = (destinations) => {
  const destinationsSorted = sortEndDateDesc(destinations);
  const endDate = formatDate(destinationsSorted[0].endDate);
  return endDate;
};

const startOfWeek = (tripStartDate) => {
  const startDateDup = new Date(tripStartDate);
  if (startDateDup.getDay() !== 0) {
    startDateDup.setDate(startDateDup.getDate() - startDateDup.getDay());
  }
  return startDateDup;
};

const endOfWeek = (tripEndDate) => {
  const endDateDup = new Date(tripEndDate);
  if (endDateDup.getDay() !== 6) {
    endDateDup.setDate(endDateDup.getDate() + (6 - endDateDup.getDay()));
  }
  return endDateDup;
};

export const allDatesFinder = (tripStartDate, tripEndDate) => {
  const startWeek = startOfWeek(tripStartDate);
  const endWeek = endOfWeek(tripEndDate);
  const allDates = [[formatDate(startWeek.toISOString())]];
  let j = 0;

  let newDate = startWeek;
  for (let i = 1; newDate < endWeek; i++) {
    newDate = new Date(startWeek);
    newDate.setDate(newDate.getDate() + i);
    allDates[j].push(formatDate(newDate.toISOString()));
    if (allDates[j].length === 7 && newDate < endWeek) {
      allDates.push([]);
      j++;
    }
  }
  return allDates;
};
