import { connect } from 'react-redux';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { signup, clearErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  const { errors } = state;
  return ({
    errors: Object.values(errors.session),
    formType: "Sign Up"
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: user => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    openOtherSessionModal: () => dispatch(openModal({ type: 'login' })),
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
