import { connect } from 'react-redux';
import TripsDash from './trips_dash';
import { closeModal, openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import { fetchTrips } from '../../actions/trip_actions';

const mapStateToProps = state => {
  const { entities: { trips } } = state;
  return ({
    trips: trips
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchTrips: () => dispatch(fetchTrips()),
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TripsDash);
