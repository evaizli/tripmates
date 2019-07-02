import React from 'react';

class ActivityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.activity);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleDelete() {
    this.props.deleteActivity({ tripId: this.state.tripId, _id: this.state._id })
    .then(() => this.props.closeModal());
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then((data) => data ? this.props.closeModal() : null);
  }

  render() {
    const {
      activityName,
      location,
      address,
      notes,
      activityDate,
      startTime,
      endTime 
    } = this.state;

    const { errors, formType } = this.props;
    const deleteButton = this.props.formType === "Edit Activity" ? <div onClick={this.handleDelete} className="delete">Delete Activity</div> : "";
    const activityDateErr = errors.activityDate ? <div className="error">{errors.activityDate}</div> : "";
    const activityDateInputErr = errors.activityDate ? "error-input" : "";
    const activityNameErr = errors.activityName ? <div className="error">{errors.activityName}</div> : "";
    const activityNameInputErr = errors.activityName ? "error-input" : "";
    const startTimeErr = errors.startTime ? <div className="error">{errors.startTime}</div> : "";
    const startTimeInputErr = errors.startTime ? "error-input" : "";
    const endTimeErr = errors.endTime ? <div className="error">{errors.endTime}</div> : "";
    const endTimeInputErr = errors.endTime ? "error-input" : "";
    
    return (
      <div className="form-main">
        <div className="flex-row baseline"><h2>{formType}</h2>&nbsp;<h3>*</h3>Required</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h4>Activity Name*</h4>
            {activityNameErr}
            <input
              className={activityNameInputErr}
              type="text"
              value={activityName}
              placeholder="Activity Name"
              onChange={this.update("activityName")}
            />
          </label>
          <div className="flex-row left-margin">
            <label> 
              <h4>Activity Date*</h4>
              {activityDateErr}
              <input
                className={activityDateInputErr}
                type="date"
                value={activityDate}
                onChange={this.update("activityDate")}
              />
            </label>
            <label> 
              <h4>Start Time*</h4>
              {startTimeErr}
              <input
                className={startTimeInputErr}
                type="time"
                value={startTime}
                onChange={this.update("startTime")}
              />
            </label>
            <label> 
              <h4>End Time*</h4> 
              {endTimeErr}
              <input
                className={endTimeInputErr}
                type="time"
                value={endTime}
                onChange={this.update("endTime")}
              />
            </label>
          </div>
          <label>
            <h4>Location</h4>
            <input
              type="text"
              value={location}
              placeholder="Activity Location"
              onChange={this.update("location")}
            />
          </label>
          <label>
            <h4>Address</h4>
            <input
              type="text"
              value={address}
              placeholder="Address"
              onChange={this.update("address")}
            />
          </label>
          <label>
            <h4>Notes</h4>
            <textarea
              type="text"
              value={notes}
              placeholder="Activity Notes"
              onChange={this.update("notes")}
              />
          </label>
          <input type="submit" value={formType}/>
        </form>
        {deleteButton}
      </div>
    );
  }
}

export default ActivityForm;