import TripDestinationForm from './trip_destination_form';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { createDestination } from "../../actions/destination_actions";
import { getDateNow } from '../../utils/datetime_api_util';

const mapStateToProps = (state) => {
  
  const { tripId } = state.ui.modal; 
  const placeholderDate = getDateNow();

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
    errors: state.errors.destination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()), 
    processForm: (data) => dispatch(createDestination(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDestinationForm);