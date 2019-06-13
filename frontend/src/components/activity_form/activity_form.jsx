import React from 'react';

class ActivityForm extends React.Component {
  constructor(props) {
    // debugger
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
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={activityName}
            placeholder="Activity Name"
            onChange={this.update("activityName")}
          />
          <input
            type="text"
            value={location}
            placeholder="Activity Location"
            onChange={this.update("location")}
          />
          <input
            type="text"
            value={address}
            placeholder="Address"
            onChange={this.update("address")}
          />
          <textarea
            type="text"
            value={notes}
            placeholder="Activity Notes"
            onChange={this.update("notes")}
          />
          <label> Activity Date: </label>
          <input
            type="date"
            value={this.prefillDate(activityDate)}
            onChange={this.update("activityDate")}
          />
          <label> Start Time: </label>
          <input
            type="time"
            value={startTime}
            onChange={this.update("startTime")}
          />
          <label> Start Time: </label>
          <input
            type="time"
            value={endTime}
            onChange={this.update("startTime")}
          />
          <input type="submit" value="Add Activity" />
        </form>
      </div>
    );
  }
}

export default ActivityForm;