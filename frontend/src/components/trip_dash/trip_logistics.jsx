import React from 'react';
import editIcon from '../../assets/images/icons8-pencil-24.png'; 
import addIcon from '../../assets/images/icons8-plus-math-30.png'; 
import { formatDate } from '../../utils/datetime_api_util';

const TripLogistics = ({ destinations, openModal }) => {

  const destinationsDisplay = destinations.map((destination, idx) => {
    return (
      <div key={idx} className="trip-logistics-destination">
        <div className="trip-logistics-destination-header">
          <div className="flex-row baseline">
            <h3>Destinations #{idx + 1}: {destination.location}&nbsp;</h3>
            <img 
              src={editIcon} 
              className="edit-icon" 
              alt="edit" 
              onClick={() => openModal({type:'editDestination', id:destination._id})} 
              title="Edit Destination"
              />
          </div>
          <h4>{formatDate(destination.startDate)} to {formatDate(destination.endDate)}</h4>
        </div>
        <ul className="trip-logistics-destination-details">
          <li onClick={() => openModal({ type: 'editDestination', id: destination._id })} title="Edit Housing">
            <h4>Housing</h4>
            <p>{destination.housing}</p>
          </li>
          <li onClick={() => openModal({ type: 'editDestination', id: destination._id })} title="Edit Transportation">
            <h4>Transportation</h4>
            <p>{destination.transportation}</p>
          </li>
          <li onClick={() => openModal({ type: 'editDestination', id: destination._id })} title="Edit Notes">
            <h4>Notes</h4>
            <p>{destination.notes}</p>
          </li>
        </ul>
      </div>
    )
  });

  const addDestinationButton = (
    <div onClick={() => openModal({ type: 'createDestination' })} className="trip-add">
      <img height="20" src={addIcon} alt="add" />&nbsp;Add Destination
    </div>
  )

  return (
    <div id="logistics" className="trip-logistics-main">
      <div className="trip-itinerary-header">
        <h2>Logistics</h2>
        { addDestinationButton }
      </div>
      <div className="trip-logistics-destinations">
        {destinationsDisplay}
      </div>
      { addDestinationButton }
    </div>
  )

}

export default TripLogistics;