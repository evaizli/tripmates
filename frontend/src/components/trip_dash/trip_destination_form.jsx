import React from 'react';
import {withRouter} from 'react-router-dom';
import { parseDate } from '../../utils/datetime_api_util';

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
    const deleteButton = this.props.formType === "Edit Destination" ? <div onClick={this.handleDelete} className="delete">Delete Destination</div> : "";

    const errorsHash = {}
    this.props.errors.forEach(error => {
      errorsHash[error] = error;
    })
    const locationErr = errorsHash["Location field is required"] ? <div className="error">Location field is required</div> : "";
    const locationInputErr = errorsHash["Location field is required"] ? "error-input" : "";
    const startDateErr = errorsHash["Start date field is required"] ? <div className="error">Start date field is required</div> : "";
    const startDateInputErr = errorsHash["Start date field is required"] ? "error-input" : "";
    const endDateErr = errorsHash["End date field is required"] ? <div className="error">End date field is required</div> : "";
    const endDateInputErr = errorsHash["End date field is required"] ? "error-input" : "";

    return (
      <div className="form-main" >
        <div className="flex-row baseline"><h2>{this.props.formType}</h2>&nbsp;<h3>*</h3>Required</div>
        
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
                value={parseDate(startDate)}
                onChange={this.update("startDate")}
              />
            </label>
            <label>
              <h4>End Date*</h4>
              { endDateErr }
              <input
                className={endDateInputErr}
                type="date"
                value={parseDate(endDate)} 
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
          <input type="submit" value={this.props.formType} />
        </form>
        { deleteButton }
      </div>
    )
  }
}

export default withRouter(TripDestinationForm);