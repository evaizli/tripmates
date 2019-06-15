import React from 'react';

class ActivityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.activity);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newState = Object.assign({}, this.state);

    newState.startTime = this.state.activityDate + " " + this.state.startTime;
    newState.endTime = this.state.activityDate + " " + this.state.endTime;
    this.props.processForm(newState).then(() => this.props.closeModal());
  }

  prefillDate(date){
    return new Date(date).toISOString().substring(0, 10);
  }

  parseDate(date) {
    let activityDate = new Date(date);
    return activityDate.toDateString()
  }

  // parseTime(time) {
  //   if (time === "") return "";

  //   let activityTime = new Date(time);
  //   let timeString = activityTime.toLocaleTimeString();
  //   let hour = activityTime.getHours();
  //   let res;
  //   if (hour !== 0 && hour < 10) {
  //     res = "0" + timeString.substring(0, 4);
  //   } else {
  //     res = timeString.substring(0, 5);
  //   }
  //   // debugger
  //   return res;
  // }

  render() {
      const {activityName,
            location,
            address,
            notes,
            activityDate,
            startTime,
            endTime } = this.state;
    
  
    return (
      <div>
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <label><h4>Activity Name</h4>
          <input
            type="text"
            value={activityName}
            placeholder="Activity Name"
            onChange={this.update("activityName")}
          />
          </label>
          <label><h4>Location</h4>
          <input
            type="text"
            value={location}
            placeholder="Activity Location"
            onChange={this.update("location")}
          />
          </label>
          <label><h4>Address</h4>
          <input
            type="text"
            value={address}
            placeholder="Address"
            onChange={this.update("address")}
          />
          </label>
          <label><h4>Notes</h4>
          <textarea
            type="text"
            value={notes}
            placeholder="Activity Notes"
            onChange={this.update("notes")}
          />
          <label> <h4>Activity Date</h4></label>
          <input
            type="date"
            value={this.prefillDate(activityDate)}
            onChange={this.update("activityDate")}
          />
          </label>
          <label> <h4>Start Time</h4>
          <input
            type="time"
            value={startTime}
            onChange={this.update("startTime")}
          />
          </label>
          <label> <h4>End Time</h4> 
          <input
            type="time"
            value={endTime}
            onChange={this.update("endTime")}
          />
          </label>
          <input type="submit" value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default ActivityForm;