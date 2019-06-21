import React from "react";
import editIcon from "../../assets/images/icons8-pencil-24.png"

class ActivtyShow extends React.Component{


    parseDate(date){
        let activityDate = new Date(date);
        return activityDate.toDateString() 
    }

    parseTime(time){
        let timeString;
        let timeSplit = time.split(":");
        let hours = parseInt(timeSplit[0]);
        if (hours > 12){
            timeString = (hours - 12) + ":" + timeSplit[1] + " PM"
        } else {
            timeString = time + " AM"
        }
        return timeString;
    }

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
            return <a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${formatAddress}`}>{address}</a>;
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
                        {this.parseDate(activityDate)}
                    </label>
                    <label> 
                        <h4>Start Time</h4>
                        {this.parseTime(startTime)}
                    </label>
                    <label> 
                        <h4>End Time</h4>
                        {this.parseTime(endTime)}
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