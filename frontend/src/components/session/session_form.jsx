import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      name: "",
      password: "",
      password2: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOtherSessionModal = this.handleOtherSessionModal.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  handleOtherSessionModal(e) {
    e.preventDefault();
    this.props.openOtherSessionModal();
  }

  demoLogin() {
    this.setState({ email: "Demo_User@tripmates.com", password: "tR!pM@t3s!" });
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
    const { formType} = this.props;

    const formTypeInput = (formType === "Sign Up") ? 
      (
        <div>
          <input type="text" onChange={this.update('displayName')} placeholder="Display Name" />
          <input type="text" onChange={this.update('name')} placeholder="Name" />
        </div>
      ) : (
        ""
      );
    const confirmPass = (formType === "Sign Up") ? 
      (
        <input type="password" onChange={this.update('password2')} placeholder="Confirm Password" />
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
          {confirmPass}
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


