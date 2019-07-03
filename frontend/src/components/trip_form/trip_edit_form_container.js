import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import TripForm from "./trip_form";
import { closeModal } from "../../actions/modal_actions";
import { updateTrip, deleteTrip, clearTripErrors } from "../../actions/trip_actions";

const mapStateToProps = state => {
  const tripId = state.ui.modal.tripId;
  const trip = state.entities.trips[tripId];

  return {
    trip: {
      _id: trip._id,
      tripName: trip.tripName,
      description: trip.description
    },
    formType: "edit",
    errors: Object.values(state.errors.trip)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: trip => dispatch(updateTrip(trip)),
    deleteTrip: tripId => dispatch(deleteTrip(tripId)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearTripErrors())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TripForm));
