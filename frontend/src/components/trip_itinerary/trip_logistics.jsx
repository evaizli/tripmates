import React from 'react';

const TripLogistics = ({ destinations }) => {

  const destinationsDisplay = destinations.map((destination, idx) => {

    return (
      <div>
        <div>
          <h3>Destinations #{idx + 1}: {destination.location}</h3>
          <h4>{destination.startDate} to {destination.endDate}</h4>
        </div>
        <ul className="trip-itinerary-logistics-details flex-row">
          <li className="flex-col">
            <h5>Housing</h5>
            <p>{destination.housing}</p>
          </li>
          <li className="flex-col">
            <h5>Transportation</h5>
            <p>{destination.transportation}</p>
          </li>
          <li className="flex-col">
            <h5>Notes</h5>
            <p>{destination.notes}</p>
          </li>
        </ul>
      </div>
    )
  });

  return (

    <div className="trip-itinerary-logistics">
      <h2>Trip Logistics</h2>
      <div>
        {destinationsDisplay}
      </div>
    </div>


  )

}

export default TripLogistics;