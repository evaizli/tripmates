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
    this.props.processForm(this.state).then(() => this.props.closeModal());
  }

  prefillDate(date){
    return new Date(date).toISOString().substring(0, 10);
  }

  parseDate(date) {
    let activityDate = new Date(date);
    return activityDate.toDateString()
  }
  parseTime(time){
    if (this.state.formType === "Edit Activity"){
    return new Date(time).toLocaleTimeString({ hour: "numeric", minute: "numeric" });
    }
  }
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