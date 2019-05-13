import { connect } from 'react-redux';
import TripsDash from './trips_dash';
import { closeModal, openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return ({

  });
};

const mapDispatchToProps = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TripsDash);
