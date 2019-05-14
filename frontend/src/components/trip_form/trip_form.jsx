import React from 'react';

class TripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tripLeader: "",
      tripMates: "",
      tripName: "",
      description: "",
      destinations: [{location: "", startDate:undefined, endDate: undefined}]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }
 
  componentDidUpdate() {

  }

  update(field) {
    return (e) => {
      return (
        this.setState({ [field]: e.target.value })
      );
    };
  }

  updateDestination(idx, field) {
    return (e) => {
      const newDestinations = Object.assign([], this.state.destinations);
      newDestinations[idx][field] = e.target.value;
      this.setState({ destinations: newDestinations });
    };
  }

  addDestination(){
    return (e) => {
      e.preventDefault();
      const oldDestinations = Object.assign([], this.state.destinations);
      oldDestinations.push({ location: "", startDate: undefined, endDate: undefined });
      this.setState({destinations: oldDestinations});
    };
  }

  removeDestination(removeIdx) {
    return (e) => {
      e.preventDefault();
      const newDestinations = this.state.destinations.filter((el, idx) => idx !== removeIdx);
      this.setState({ destinations: newDestinations});
    };
  }



  render() {
    console.log(this.state);

    const destinationInput = this.state.destinations.map((destination, idx) => {
      return (
        <div key={idx} className="trip-form-destination-inputs">
          <h4>Destination #{idx+1}</h4>
          <input 
            type="text" 
            placeholder={`Destination #${idx + 1}`} 
            onChange={this.updateDestination(idx, 'location')} 
            value={destination.location}
            />
          <div className="trip-form-destination-date-inputs flex-row">
            <input 
              type="date" 
              onChange={this.updateDestination(idx, 'startDate')} 
              value={destination.startDate} 
              />&nbsp;&nbsp;&nbsp;to&nbsp;&nbsp;&nbsp;
            <input 
              type="date" 
              onChange={this.updateDestination(idx, 'endDate')} 
              value={destination.endDate}
              />
            <button href="#" onClick={this.removeDestination(idx)}>Remove</button>
          </div>
        </div>
      )
    });

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
        
          { destinationInput }
          <button onClick={this.addDestination()}>Add a Destination</button>
  
          <input type="submit" value="Create Trip" />

        </form>
      </div>
    );
  }
};

export default TripForm;