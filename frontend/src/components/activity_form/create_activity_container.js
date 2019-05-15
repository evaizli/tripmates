import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { closeModal } from '../../actions/modal_actions';
import { createActivity } from "../../actions/activity_actions";

const mapStateToProps = state => {
    debugger
    console.log(state)
  return {
    trip: {
      activityName: "",
      location: "",
      address: "",
      mates: "",
      tag: "",
      activityDate: "",
      image: "",
      notes: "",
      startTime: "",
      endTime: ""
    },
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
