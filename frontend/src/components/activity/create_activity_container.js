import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { closeModal } from '../../actions/modal_actions';
import { createActivity } from "../../actions/activity_actions";

const mapStateToProps = (state, ownProps) => {

  const { tripId, date } = state.ui.modal; 
  const activityDate = date ? date : new Date().toISOString();
  
  let activity = {
      activityName: "",
      location: "",
      address: "",
      mates: "",
      tag: "",
      activityDate,
      image: "",
      notes: "",
      startTime: "",
      endTime: "",
      tripId,
  };
  
  return {
    activity,
    formType: "Create Activity"
  };
};

const mapDispatchToProps = dispatch => {

  return {
    processForm: activity => dispatch(createActivity(activity)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(ActivityForm);
