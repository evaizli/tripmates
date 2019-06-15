import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchTrips } from '../../actions/trip_actions';

const mapStateToProps = (state) => {
  const { entities: { trips } } = state;
  return ({
    trips: trips
  });
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchTrips: () => dispatch(fetchTrips())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
