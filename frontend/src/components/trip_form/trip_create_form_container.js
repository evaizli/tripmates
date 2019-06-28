import { connect } from 'react-redux';
import TripForm from './trip_form';
import { closeModal } from '../../actions/modal_actions';
import { createTrip } from '../../actions/trip_actions';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return ({
    createTrip: trip => dispatch(createTrip(trip)),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TripForm);
