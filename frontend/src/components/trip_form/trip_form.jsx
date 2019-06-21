import React from 'react';

class TripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripName: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // const tripDate = {
    //   tripName: this.state.tripName,
    //   description: this.state.description,
    // };
    // this.props.history.push("/dashboard");
    // this.props.createTrip(tripDate)
    //   .then(trip => {
    //     this.state.destinations.forEach(destination => {
    //       destination.tripId = trip._id;
    //       this.props.createDestination(destination);
    //     })
    //   })
      // .then(this.props.closeModal);
      // .then(this.props.history.push());
    this.props.createTrip(this.state);
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
            value={this.state.tripName}
            />
          <input
            type="text"
            onChange={this.update('description')}
            placeholder="Trip Description"
            value={this.state.description}
            />
        
          <input type="submit" value="Create Trip" />

        </form>
      </div>
    );
  }
};

export default TripForm;