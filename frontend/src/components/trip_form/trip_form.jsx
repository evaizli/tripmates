import React from 'react';

class TripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.trip;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(data => {
        if (!data.errors) {
          this.props.history.push(`/trip/${data.trip._id}`);
          this.props.closeModal();
        }
      });
  }

  handleDelete() {
    this.props.deleteTrip(this.state._id)
      // .then(() => this.props.history.push('/dashboard'))
      .then(() => this.props.closeModal());
    this.props.history.push('/dashboard');
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
    const deleteButton = this.props.formType === "edit" ? <div onClick={this.handleDelete} className="delete">Delete Trip</div> : "";

    const errors = this.props.errors.map((error, idx) => (
      <li className="errors" key={idx}>{error}</li>
    ));

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
        <ul>{errors}</ul>
        { deleteButton }
      </div>
    );
  }
};

export default TripForm;