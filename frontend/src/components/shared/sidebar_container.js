import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchTrips } from '../../actions/trip_actions';

const mapStateToProps = (state) => {
  const trips = Object.values(state.entities.trips);
  const destinations = state.entities.destinations;

  return {
    trips,
    destinations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchTrips: () => dispatch(fetchTrips())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
