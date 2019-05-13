import SessionButtons from './session_button';
import { connect } from 'react-redux';
import { openModal } from '../../../../actions/modal_actions';

const mapStateToProps = state => {
  const { session } = state;
  return {
    currentUser: session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionButtons);