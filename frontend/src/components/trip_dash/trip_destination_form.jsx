import React from 'react';
import {withRouter} from 'react-router-dom';

class TripDestinationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = Object.assign({}, this.props.destination);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState( {[field]: e.currentTarget.value});
  }

  handleDelete() {
    this.props.deleteDestination({ tripId: this.state.tripId, _id: this.state._id })
      .then(() => this.props.closeModal());
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state)
      .then((data) => data ? this.props.closeModal() : null)
  }

  render() {
    const { location, startDate, endDate, housing, transportation, notes } = this.state;
    const { errors, formType } = this.props;
    const deleteButton = formType === "Edit Destination" ? <div onClick={this.handleDelete} className="delete">Delete Destination</div> : "";
    const locationErr = errors.location ? <div className="error">{errors.location}</div> : "";
    const locationInputErr = errors.location ? "error-input" : "";
    const startDateErr = errors.startDate ? <div className="error">{errors.startDate}</div> : "";
    const startDateInputErr = errors.startDate ? "error-input" : "";
    const endDateErr = errors.endDate ? <div className="error">{errors.endDate}</div> : "";
    const endDateInputErr = errors.endDate ? "error-input" : "";

    return (
      <div className="form-main" >
        <div className="flex-row baseline"><h2>{formType}</h2>&nbsp;<h3>*</h3>Required</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h4>Location*</h4>
            { locationErr }
            <input
              className={ locationInputErr }
              type="text"
              value ={location}
              onChange={this.update("location")}
            />
          </label>
          <div className="flex-row left-margin">
            <label>
              <h4>Start Date*</h4>
              { startDateErr }
              <input
                className={startDateInputErr}
                type="date"
                value={startDate}
                onChange={this.update("startDate")}
              />
            </label>
            <label>
              <h4>End Date*</h4>
              { endDateErr }
              <input
                className={endDateInputErr}
                type="date"
                value={endDate} 
                onChange={this.update("endDate")}
              />
            </label>
          </div>
          <label><h4>Housing</h4>
            <textarea 
              value={housing}
              onChange={this.update("housing")}>
            </textarea>
          </label>
          <label><h4>Transportation</h4>
            <textarea 
              value={transportation}
              onChange={this.update("transportation")}>
            </textarea>
          </label>
          <label><h4>Notes</h4>
            <textarea 
              value={notes}
              onChange={this.update("notes")}>
              </textarea>
          </label>
          <input type="submit" value={formType} />
        </form>
        { deleteButton }
      </div>
    )
  }
}

export default withRouter(TripDestinationForm);