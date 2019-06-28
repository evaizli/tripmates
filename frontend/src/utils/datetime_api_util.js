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

export const inProgressTrips = (trips) => {
  const dateNow = new Date();
  return trips.filter(trip => {
    const startDate = new Date(sortStartDateAsc(trip.destinations)[0].startDate);
    const endDate = new Date(sortEndDateDesc(trip.destinations)[0].endDate);
    return startDate <= dateNow && endDate >= dateNow;
  });
};

export const pastTrips = (trips) => {
  const dateNow = new Date();
  return trips.filter(trip => {
    const endDate = new Date(sortEndDateDesc(trip.destinations)[0].endDate);
    return endDate < dateNow;
  });
};

export const futureTrips = (trips) => {
  const dateNow = new Date();
  return trips.filter(trip => {
    const startDate = new Date(sortStartDateAsc(trip.destinations)[0].startDate);
    return startDate > dateNow;
  });
};

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
  const allDates = [[startWeek]];
  let j = 0;

  let newDate = startWeek;
  for (let i = 1; newDate < endWeek; i++) {
    newDate = new Date(startWeek);
    newDate.setDate(newDate.getDate() + i);
    allDates[j].push(newDate);
    if (allDates[j].length === 7 && newDate < endWeek) {
      allDates.push([]);
      j++;
    }
  }
  return allDates;
};
