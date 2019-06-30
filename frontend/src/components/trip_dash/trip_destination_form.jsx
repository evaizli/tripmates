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
      .then(()=>this.props.closeModal());
  }

  render() {
    const { location, startDate, endDate, housing, transportation, notes } = this.state;
    const deleteButton = this.props.formType === "Edit Destination" ? <div onClick={this.handleDelete} className="delete">Delete Destination</div> : "";

    return (
      <div className="form-main" >
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit}>
          <label><h4>Location</h4>
            <input
              type="text"
              value ={location}
              onChange={this.update("location")}
            />
          </label>
          <div className="flex-row left-margin">
            <label><h4>Start Date</h4>
            <input
              type="date"
              value={parseDate(startDate)}
              onChange={this.update("startDate")}
            />
            </label>
            <label><h4>End Date</h4>
            <input
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