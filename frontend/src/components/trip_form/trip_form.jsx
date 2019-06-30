import React from 'react';

class TripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.trip;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(() => this.props.closeModal());
    
  }
 
  update(field) {
    return (e) => {
      return (
        this.setState({ [field]: e.target.value })
      );
    };
  }

  render() {
    const formTitle = this.props.formType === "create" ? "Create a Trip" : "Edit a Trip";
    const buttonText = this.props.formType === "create" ? "Create Trip" : "Edit Trip";

    return (
      <div className = "trip-form-page" >
        <h2>{ formTitle }</h2>
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
        
          <input type="submit" value={ buttonText } />

        </form>
      </div>
    );
  }
};

export default TripForm;