import React from 'react';
import editIcon from '../../assets/images/icons8-pencil-24.png'; 
import addIcon from '../../assets/images/icons8-plus-math-30.png'; 

const TripLogistics = ({ destinations, convertDate, openModal }) => {

  const destinationsDisplay = destinations.map((destination, idx) => {
    console.log(destination);
    return (
      <div key={idx} className="trip-logistics-destination">
        <div className="trip-logistics-destination-header">
          <h3>Destinations #{idx + 1}: {destination.location}</h3>
          <h4>{convertDate(destination.startDate)} to {convertDate(destination.endDate)}</h4>
          <img src={editIcon} alt="edit" onClick={() => openModal('editDestination')} />
        </div>
        <ul className="trip-logistics-destination-details">
          <li className="flex-col">
            <h5>Housing</h5>
            <p>{destination.housing}</p>
          </li>
          <li className="flex-col trip-logistics-destination-details-center">
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

    <div className="trip-logistics">
      <h2>Trip Logistics</h2>
      <div className="trip-logistics-destinations">
        {destinationsDisplay}
      </div>
      <div onClick={() => openModal('createDestination')} className="trip-logistics-destination-add">
        <img height="20" src={addIcon} alt="add" />&nbsp;Add Destination
      </div>
    </div>


  )

}

export default TripLogistics;