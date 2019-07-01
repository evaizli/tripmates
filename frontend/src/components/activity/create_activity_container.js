import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { closeModal } from '../../actions/modal_actions';
import { createActivity } from "../../actions/activity_actions";

const mapStateToProps = (state) => {

  const { tripId, date } = state.ui.modal; 
  
  let activity = {
    activityName: "",
    location: "",
    address: "",
    mates: "",
    tag: "",
    activityDate: date,
    image: "",
    notes: "",
    startTime: "07:00",
    endTime: "08:00",
    tripId
  };
  
  return {
    activity,
    formType: "Create Activity",
    errors: Object.values(state.errors.activity)
  };
};

const mapDispatchToProps = dispatch => {

  return {
    processForm: activity => dispatch(createActivity(activity)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(ActivityForm);
