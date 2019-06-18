import React from "react";
// import { openModal} from "../../actions/modal_actions";
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
            debugger
        return(
            <div>
                <div>
                    <h2>{activityName}</h2>
                    <img src={editIcon} alt="edit" onClick={() => this.props.openModal({ type: 'editActivity', id: this.props.activity._id, tripId:this.props.tripId })} />
                </div>
                <label> <h4>Location</h4>
                    {location}
                </label>
                <label> <h4>Address</h4>
                    {address}
                </label>
                <label> <h4>Activity Date</h4>
                    {this.parseDate(activityDate)}
                </label>
                <label> <h4>Start Time</h4>
                    {this.parseTime(startTime)}
                </label>
                <label> <h4>End Time</h4>
                    {this.parseTime(endTime)}
                </label>
                <label> <h4>Notes</h4>
                    {notes}
                </label>
            </div>
        )
    }
};


export default ActivtyShow;