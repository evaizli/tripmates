import React from 'react';

class TripDestinationForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  render() {

    return (
      <div className="trip-destination-form-page" >
        <h2>{this.props.formType}</h2>
        <form className="trip-form" >
          <label><h4>Location</h4>
            <input
              type="text"
            />
          </label>
          <label><h4>Start Date</h4>
          <input
            type="date"
          />
          </label>
          <label><h4>End Date</h4>
          <input
            type="date"
          />
          </label>
          <label><h4>Housing</h4>
            <textarea></textarea>
          </label>
          <label><h4>Transportation</h4>
            <textarea></textarea>
          </label>
          <label><h4>Notes</h4>
            <textarea></textarea>
          </label>


          <input type="submit" value={this.props.formType} />

        </form>
      </div>
    )
  }
}

export default TripDestinationForm;