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
      destination: "",
      destinationCount: [""]
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

  destinationCount(action) {
    let oldArr = Object.assign([], this.state.destinationCount);
    if (action === 'remove' && (this.state.destinationCount.length > 1)) {
      oldArr.pop();
      return this.setState({ destinationCount: oldArr});
    } else if (action === 'add') {
      oldArr.push("");
      return this.setState({ destinationCount: oldArr });
    }
  }



  render() {

    const destinationInput = this.state.destinationCount.map((el, idx) => {
      return (
        <div key={idx}>
          <h4>Destination #{idx+1}</h4>
          <input type="text" placeholder={`Destination #${idx+1}`}/>
          <input type="date" />
          <input type="date" />
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
          <div className="destination-count flex-row">
            <div className="destination-remove" onClick={() => this.destinationCount('remove')}>-</div>
            <input 
              type="number"
              min="1"
              value={this.state.destinationCount.length}
            />
            <div className="destination-add" onClick={() => this.destinationCount('add')}>+</div>
          </div>

          <div>
            { destinationInput }
          </div>
          <input type="submit" value="Create Trip" />

        </form>
      </div>
    );
  }
};

export default TripForm;