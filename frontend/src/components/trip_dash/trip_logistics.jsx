import React from 'react';
import editIcon from '../../assets/images/icons8-pencil-24.png'; 
import addIcon from '../../assets/images/icons8-plus-math-30.png'; 
import { formatDate, getDateNow } from '../../utils/datetime_api_util';

const TripLogistics = ({ tripId, destinations, openModal }) => {
  
  const destinationsDisplay = destinations.map((destination, idx) => {
    const modalAttr = { type: 'editDestination', destinationId: destination._id, tripId };
    return (
      <div key={idx} className="trip-logistics-destination">
        <div className="trip-logistics-destination-header">
          <div className="flex-row baseline">
            <h3>Destinations #{idx + 1}: {destination.location}&nbsp;</h3>
            <img 
              src={editIcon} 
              className="edit-icon" 
              alt="edit" 
              onClick={() => openModal(modalAttr)} 
              title="Edit Destination"
              />
          </div>
          <h4>{formatDate(destination.startDate)} to {formatDate(destination.endDate)}</h4>
        </div>
        <ul className="trip-logistics-destination-details">
          <li onClick={() => openModal(modalAttr)} title="Edit Housing">
            <h4>Housing</h4>
            <p>{destination.housing}</p>
          </li>
          <li onClick={() => openModal(modalAttr)} title="Edit Transportation">
            <h4>Transportation</h4>
            <p>{destination.transportation}</p>
          </li>
          <li onClick={() => openModal(modalAttr)} title="Edit Notes">
            <h4>Notes</h4>
            <p>{destination.notes}</p>
          </li>
        </ul>
      </div>
    )
  });

  const placeholderDate = destinations.length > 0 ? destinations[destinations.length - 1].endDate : getDateNow();

  const addDestinationButton = (
    <div onClick={() => openModal({ type: 'createDestination', tripId, placeholderDate })} className="add-button">
      <img src={addIcon} alt="add" />
      &nbsp;Add Destination
    </div>
  )

  const secondAddDestinationButton = destinations.length > 0 ? addDestinationButton : "";

  return (
    <div id="logistics" className="trip-logistics-main">
      <div className="trip-itinerary-header">
        <h2>Logistics</h2>
        { addDestinationButton }
      </div>
      <div className="trip-logistics-destinations">
        {destinationsDisplay}
      </div>
      { secondAddDestinationButton }
    </div>
  )

}

export default TripLogistics;