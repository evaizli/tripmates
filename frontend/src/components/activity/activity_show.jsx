import React from "react";
import editIcon from "../../assets/images/icons8-pencil-24.png";
import { formatDate, formatTime } from '../../utils/datetime_api_util';

class ActivtyShow extends React.Component{

    render(){
        const { 
            activityDate,
            activityName,
            address,
            endTime,
            location,
            notes, 
            startTime} = this.props.activity;


        const mapLink = address => {
            const formatAddress = address.split(" ").join("+"); 
            return <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${formatAddress}`}>{address}</a>;
        };  

        return(
            <div className="activity-show-main">
                <div className="activity-show-header">
                    <h2>{activityName}&nbsp;</h2>
                    <img
                        src={editIcon}
                        className="edit-icon"
                        alt="edit"
                        onClick={() => this.props.openModal({ type: 'editActivity', id: this.props.activity._id, tripId: this.props.tripId })}
                        title="Edit Activity"
                    />
                </div>
                <div className="flex-row left-margin">
                    <label> 
                        <h4>Activity Date</h4>
                        {formatDate(activityDate)}
                    </label>
                    <label> 
                        <h4>Start Time</h4>
                        {formatTime(startTime)}
                    </label>
                    <label> 
                        <h4>End Time</h4>
                        {formatTime(endTime)}
                    </label>
                </div>
                <label> 
                    <h4>Location</h4>
                    {location}
                </label>
                <label> 
                    <h4>Address</h4>
                    {mapLink(address)}
                </label>
                <label> 
                    <h4>Notes</h4>
                    {notes}
                </label>
            </div>
        )
    }
};


export default ActivtyShow;