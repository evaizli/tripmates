import React from 'react';
import {withRouter} from 'react-router-dom'

class TripDestinationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = Object.assign({}, this.props.destination);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  update(field) {
    return e => this.setState( {[field]: e.currentTarget.value});
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state).then(()=>this.props.closeModal());
  }

  prefillDate(date){
    let dateConvert = new Date(date).toISOString().substring(0, 10);
    return dateConvert; 
  }

  render() {
    const {  location, startDate, endDate, housing, transportation, notes} = this.state
    return (
      <div className="trip-destination-form-page" >
        <h2>{this.props.formType}</h2>
        <form onSubmit={this.handleSubmit} className="trip-form" >
          <label><h4>Location</h4>
            <input
              type="text"
              value ={location}
              onChange={this.update("location")}
            />
          </label>
          <label><h4>Start Date</h4>
          <input
            type="date"
            value={this.prefillDate(startDate)} //need to figure out how to prefill a date
            onChange={this.update("startDate")}
          />
          </label>
          <label><h4>End Date</h4>
          <input
            type="date"
            value={this.prefillDate(endDate)} //need to figure out how to prefill a date
              onChange={this.update("endDate")}
          />
          </label>
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
      </div>
    )
  }
}

export default withRouter(TripDestinationForm);