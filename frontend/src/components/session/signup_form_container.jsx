import { connect } from 'react-redux';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => {
  return ({
    errors: state.errors.session,
    signedIn: state.session.isSignedIn,
    formType: "Sign Up"
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    openOtherSessionModal: () => dispatch(openModal('login')),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
