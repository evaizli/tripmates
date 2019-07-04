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
    const { errors, formType } = this.props;
    const formTitle = formType === "create" ? "Create a Trip" : "Edit a Trip";
    const buttonText = formType === "create" ? "Create Trip" : "Edit Trip";
    const deleteButton = formType === "edit" ? <div onClick={this.handleDelete} className="delete">Delete Trip</div> : "";
    const tripNameErr = errors.tripName ? <div className="error">{errors.tripName}</div> : "";
    const tripNameInputErr = errors.tripName ? "error-input" : "";

    return (
      <div className = "trip-form-page" >
        <h2>{ formTitle }</h2>
        <form className="trip-form" onSubmit={this.handleSubmit}>
          {tripNameErr}
          <input
            type="text"
            className={tripNameInputErr}
            onChange={this.update('tripName')}
            placeholder="Trip Name (required)"
            value={this.state.tripName}
            />
          <input
            type="text"
            onChange={this.update('description')}
            placeholder="Trip Description (optional)"
            value={this.state.description}
            />
        
          <input type="submit" value={ buttonText } />
        </form>
        { deleteButton }
      </div>
    );
  }
};

export default TripForm;