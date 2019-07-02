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
    const { errors, formType} = this.props;
    const emailErr = errors.email ? <div className="error">{errors.email}</div> : "";
    const emailInputErr = errors.email ? "error-input" : "";
    const passwordErr = errors.password ? <div className="error">{errors.password}</div> : "";
    const passwordInputErr = errors.password ? "error-input" : "";
    const password2Err = errors.password2 ? <div className="error">{errors.password2}</div> : "";
    const password2InputErr = errors.password2 ? "error-input" : "";
    const nameErr = errors.name ? <div className="error">{errors.name}</div> : "";
    const nameInputErr = errors.name ? "error-input" : "";
    const displayNameErr = errors.displayName ? <div className="error">{errors.displayName}</div> : "";
    const displayNameInputErr = errors.displayName ? "error-input" : "";

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
    const autocompletePsw = (formType === "Sign Up") ? "new-password" : "current-password";

    return (
      <div className="session-page">

        <h2>{formType}</h2>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.update('email')}
            placeholder="Email"
            autoComplete="username"
          />
          {formTypeInput}
          <input
            type="password"
            onChange={this.update('password')}
            placeholder="Password"
            autoComplete={autocompletePsw}
          />
          {confirmPass}
          <input type="submit" value={formType} />
          {demoForm}
        </form>
        <button onClick={this.handleOtherSessionModal}>{otherForm}</button>
      </div>
    );
  }
};

export default SessionForm;


