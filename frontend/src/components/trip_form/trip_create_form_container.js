import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import TripForm from './trip_form';
import { closeModal } from '../../actions/modal_actions';
import { createTrip, clearTripErrors } from '../../actions/trip_actions';

const mapStateToProps = state => {  
  return {
    trip: {
      tripName: "",
      description: ""
    },
    formType: "create",
    errors: Object.values(state.errors.trip)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: trip => dispatch(createTrip(trip)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearTripErrors())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TripForm)
);
