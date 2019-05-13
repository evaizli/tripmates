import React from 'react';

class TripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripLeader: "",
      tripMates: "",
      tripName: "",
      description: "",
      tripStartDate: "",
      tripEndDate: "",
      destination: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }


  update(field) {
    return (e) => {
      return (
        this.setState({ [field]: e.target.value })
      );
    };
  }

  render() {
    return (
      <div className = "trip-form-page" >
        <h2>Create a Trip</h2>
        <form className="trip-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.update('tripName')}
            placeholder="Trip Name"
            />
          <input
            type="text"
            onChange={this.update('description')}
            placeholder="Trip Description"
            />
          <div className="flex-row">
            <label className="flex-col">Trip Start Date
              <input 
                type="date"
                onChange={this.update('tripStartDate')}
                />
            </label>
            <label className="flex-col">Trip End Date
              <input 
                type="date"
                onChange={this.update('tripEndDate')}
                />
            </label>
          </div>

          <input type="submit" value="Create Trip" />

        </form>
      </div>
    );
  }
};

export default TripForm;