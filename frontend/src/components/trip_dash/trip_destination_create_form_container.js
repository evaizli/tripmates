import TripDestinationForm from './trip_destination_form';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { createDestination, clearDestinationErrors } from "../../actions/destination_actions";

const mapStateToProps = (state) => {
  
  const { tripId, placeholderDate } = state.ui.modal; 

  let destination = {
    location: "",
    startDate: placeholderDate,
    endDate: placeholderDate,
    housing: "",
    transportation: "",
    notes:"",
    tripId
  }; 

  return {
    destination,
    formType: "Create Destination",
    errors: state.errors.destination,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()), 
    processForm: (data) => dispatch(createDestination(data)),
    clearErrors: () => dispatch(clearDestinationErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDestinationForm);