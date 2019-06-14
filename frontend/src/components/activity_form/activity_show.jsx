import React from "react";
// import { openModal} from "../../actions/modal_actions";
import editIcon from "../../assets/images/icons8-pencil-24.png"

class ActivtyShow extends React.Component{


    parseDate(date){
        let activityDate = new Date(date);
        return activityDate.toDateString() 
    }

    parseTime(time){
        let activityTime = new Date(time);
        let timeString =activityTime.toLocaleTimeString();
        let unit = timeString.substring(timeString.length-2);
        let hour = activityTime.getHours();
        let res;
        if ( hour !== 0 &&  hour < 10){
            res = "0" + timeString.substring(0,4) + " " + unit;
        } else {
            res = timeString.substring(0, 5) + " " + unit;
        }
        // debugger
        return res;
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
        return(
            <div>
                <div>
                    <h2>{activityName}</h2>
                    <img src={editIcon} alt="edit" onClick={() => this.props.openModal({ type: 'editActivity', id: this.props.activity._id })} />
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