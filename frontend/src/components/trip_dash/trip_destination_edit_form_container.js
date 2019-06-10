import TripDestinationForm from './trip_destination_form';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import {updateDestination} from "../../actions/destination_actions";

const mapStateToProps = (state, ownProps) => {
  let destinationId = state.ui.modal.id;
  let destination;
  state.entities.destinations.forEach(d => {
    if (d._id === destinationId){
      destination = d;
    }
  })
  return {
    destination: destination,
    formType: "Edit Destination"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    processForm: (data) => dispatch(updateDestination(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripDestinationForm);