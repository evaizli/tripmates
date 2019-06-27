import { connect } from 'react-redux';
import TripsDash from './trips_dash';
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchTrips } from '../../actions/trip_actions';

const mapStateToProps = (state) => {
  const trips = Object.values(state.entities.trips);

  return ({
    trips: trips
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchTrips: () => dispatch(fetchTrips()),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TripsDash);
