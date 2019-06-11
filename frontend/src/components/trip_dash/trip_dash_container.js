import TripDash from './trip_dash';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchTrip } from '../../actions/trip_actions';

const mapStateToProps = (state, ownProps) => {
  const { entities: { trips } } = state;
  const trip = trips.filter(trip => trip._id === ownProps.match.params.tripId);
  const destinations = state.entities.destinations;
  return {
    trip: trip[0],
    destinations: destinations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTrip: id => dispatch(fetchTrip(id)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDash);
