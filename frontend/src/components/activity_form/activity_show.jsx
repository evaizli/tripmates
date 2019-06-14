import React from "react";


class ActivtyShow extends React.Component{


    parseDate(date){
        let activityDate = new Date(date);
        return activityDate.toDateString() 
    }

    parseTime(time){
        let activityTime = new Date(time);
        return activityTime.toLocaleTimeString();
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
                <h2>{activityName}</h2>
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