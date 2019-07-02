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

    const signUpInput = (formType === "Sign Up") ? 
      (
        <>
          {displayNameErr}
          <input className={displayNameInputErr} type="text" onChange={this.update('displayName')} placeholder="Display Name" />
          {nameErr}
          <input className={nameInputErr} type="text" onChange={this.update('name')} placeholder="Name" />
        </>
      ) : (
        ""
        );
    const confirmPass = (formType === "Sign Up") ? 
    (
      <>
        {password2Err}
        <input className={password2InputErr} type="password" onChange={this.update('password2')} placeholder="Confirm Password" />
      </>
    ) : (
      ""
    );

    const demoLoginButton = (formType === "Log In") ?
      (<button onClick={this.demoLogin}>Demo Log In</button>)
      : "";

    const otherButtonText = (formType === "Sign Up") ? "Log In" : "Sign Up";
    const autocompletePsw = (formType === "Sign Up") ? "new-password" : "current-password";

    return (
      <div className="session-page">

        <h2>{formType}</h2>
        <form className="session-form" onSubmit={this.handleSubmit}>
          {emailErr}
          <input
            className={emailInputErr}
            type="text"
            onChange={this.update('email')}
            placeholder="Email"
            autoComplete="username"
            />
          {signUpInput}
          {passwordErr}
          <input
            className={passwordInputErr}
            type="password"
            onChange={this.update('password')}
            placeholder="Password"
            autoComplete={autocompletePsw}
          />
          {confirmPass}
          <input type="submit" value={formType} />
          {demoLoginButton}
        </form>
        <button onClick={this.handleOtherSessionModal}>{otherButtonText}</button>
      </div>
    );
  }
};

export default SessionForm;


