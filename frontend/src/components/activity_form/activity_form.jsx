import React from 'react';

class ActivityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.trip;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      return this.setState({[field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.closeModal());
  }

  render() {
      const {activityName,
            location,
            address,
            notes,
            activityDate,
            startTime,
            endTime } = this.props.trip;

    return (
      <div>
        <form onClick={this.handleSubmit}>
          <input
            type="text"
            value={activityName}
            onChange={this.update("activityName")}
          />
          <input
            type="text"
            value={location}
            onChange={this.update("location")}
          />
          <input
            type="text"
            value={address}
            onChange={this.update("address")}
          />
          <textarea
            type="text"
            value={notes}
            onChange={this.update("notes")}>
          </textarea>
          <input
            type="date"
            value={activityDate}
            onChange={this.update("activityDate")}
          />
          <input
            type="time"
            value={startTime}
            onChange={this.update("startTime")}
          />
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