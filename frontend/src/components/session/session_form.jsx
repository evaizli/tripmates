import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      name: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOtherSessionModal = this.handleOtherSessionModal.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.processForm(this.state)
      .then(() => this.props.closeModal());
  }

  handleOtherSessionModal(e) {
    e.preventDefault();
    this.props.openOtherSessionModal();
  }

  demoLogin() {
    this.setState({ username: "demo_user", password: "cruxR0cks" });
  }

  update(field) {
    return (e) => {
      return (
        this.setState({ [field]: e.target.value })
      );
    };
  }

  render() {
    const errors = this.props.errors.map((error, idx) => (
      <li key={idx}>{error}</li>
    ));
    const { formType } = this.props;

    const formTypeInput = (formType === "Sign Up") ? 
      (
        <>
          <input type="text" onChange={this.update('displayName')} placeholder="Display Name" />
          <input type="text" onChange={this.update('name')} placeholder="Name" />
        </>
      ) : (
        ""
      );

    const demoForm = (formType === "Log In") ?
      (<button onClick={this.demoLogin}>Demo Log In</button>)
      : "";

    const otherForm = (formType === "Sign Up") ? "Log In" : "Sign Up";

    return (
      <div className="session-page">

        <h2>{formType}</h2>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.update('email')}
            placeholder="Email"
          />
          {formTypeInput}
          <input
            type="password"
            onChange={this.update('password')}
            placeholder="Password"
          />

          <input type="submit" value={formType} />
          {demoForm}
        </form>

        <button onClick={this.handleOtherSessionModal}>{otherForm}</button>

        <ul>
          {errors}
        </ul>
      </div>
    );
  }
};

export default SessionForm;