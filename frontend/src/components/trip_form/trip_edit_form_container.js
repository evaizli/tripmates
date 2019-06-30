import { connect } from "react-redux";
import TripForm from "./trip_form";
import { closeModal } from "../../actions/modal_actions";
import { updateTrip } from "../../actions/trip_actions";

const mapStateToProps = state => {
  const tripId = state.ui.modal.tripId;
  const trip = state.entities.trips[tripId];

  return {
    trip: {
      _id: trip._id,
      tripName: trip.tripName,
      description: trip.description
    },
    formType: "edit"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: trip => dispatch(updateTrip(trip)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripForm);
