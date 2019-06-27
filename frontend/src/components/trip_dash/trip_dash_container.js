import TripDash from './trip_dash';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchTrip } from '../../actions/trip_actions';

const mapStateToProps = (state, ownProps) => {
  const { entities: { trips } } = state;
  const trip = trips[ownProps.match.params.tripId];
  let destinations = [];
  let activities = [];

  if (trip) {
    destinations = trip.destinations;
    activities = trip.activities;
  }

  return {
    trip,
    destinations,
    activities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTrip: id => dispatch(fetchTrip(id)),
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDash);
