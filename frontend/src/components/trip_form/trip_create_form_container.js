import { connect } from 'react-redux';
import TripForm from './trip_form';
import { closeModal } from '../../actions/modal_actions';
import { createTrip } from '../../actions/trip_actions';
import { createDestination } from '../../actions/destination_actions';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return ({
    createTrip: trip => dispatch(createTrip(trip)),
    createDestination: trip => dispatch(createDestination(trip)),
    closeModal: () => dispatch(closeModal)
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TripForm);
