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

export const upcomingTrips = (trips) => {
  const dateNow = new Date();
  return trips.filter(trip => {
    const startDate = new Date(sortStartDateAsc(trip.destinations)[0].startDate);
    return startDate > dateNow;
  });
};

export const convertDate = (date) => {
  const dateOptions = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const dateDup = new Date(date);
  dateDup.setHours(dateDup.getHours() + (dateDup.getTimezoneOffset() / 60));
  return dateDup.toLocaleDateString("en-US", dateOptions);
};

export const tripStartDateFinder = (destinations) => {
  const destinationsSorted = sortStartDateAsc(destinations);
  const startDate = convertDate(destinationsSorted[0].startDate);
  return startDate;
};

export const tripEndDateFinder = (destinations) => {
  const destinationsSorted = sortEndDateDesc(destinations);
  const endDate = convertDate(destinationsSorted[0].endDate);
  return endDate;
};