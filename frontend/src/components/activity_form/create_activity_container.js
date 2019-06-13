import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { closeModal } from '../../actions/modal_actions';
import { createActivity } from "../../actions/activity_actions";

const mapStateToProps = state => {
  const tripId = state.entities.trips[0]._id
  let activity = {
      activityName: "",
      location: "",
      address: "",
      mates: "",
      tag: "",
      activityDate: new Date(),
      image: "",
      notes: "",
      startTime: "",
      endTime: "",
      tripId,
  }
  return {
    activity,
    FormType: "Create Trip"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: activity => dispatch(createActivity(activity)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(ActivityForm);
