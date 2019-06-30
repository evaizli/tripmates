import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import TripForm from './trip_form';
import { closeModal } from '../../actions/modal_actions';
import { createTrip } from '../../actions/trip_actions';

const mapStateToProps = state => {  
  return {
    trip: {
      tripName: "",
      description: ""
    },
    formType: "create"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: trip => dispatch(createTrip(trip)),
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TripForm)
);
