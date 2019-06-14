import { connect } from "react-redux";
import ActivityShow from "../activity_form/activity_show";
import { closeModal } from "../../actions/modal_actions";
import { fetchActivity } from "../../actions/activity_actions";

const mapStateToProps = (state, ownProps) => {
  let activityId = state.ui.modal.id;
  let activity;
  state.entities.activities.forEach(a => {
      if (a._id === activityId){
        activity = a;
      }
  })
  return {
    activity,
    formType: "Activity Show"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchActivity: activity => dispatch(fetchActivity(activity)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow);
