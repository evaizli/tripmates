import TripDestinationForm from './trip_destination_form';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { createDestination} from "../../actions/destination_actions";

const mapStateToProps = (state, ownProps) => {
  
  const { tripId } = state.ui.modal; 


  let destination = {
    location: "",
    startDate: new Date(),
    endDate: new Date(),
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