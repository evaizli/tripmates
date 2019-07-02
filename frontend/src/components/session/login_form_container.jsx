import { connect } from 'react-redux';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { login, clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return ({
    formType: "Log In",
    errors: state.errors.session
  });
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    openOtherSessionModal: () => dispatch(openModal({type: 'signup'})),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
