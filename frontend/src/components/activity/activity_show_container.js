import { connect } from "react-redux";
import ActivityShow from "../activity/activity_show";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchActivity } from "../../actions/activity_actions";

const mapStateToProps = state => {
  const tripId = state.ui.modal.tripId;
  const activityId = state.ui.modal.activityId;
  const activity = state.entities.activities[tripId][activityId];
  
  return {
    activity,
    tripId,
    formType: "Activity Show"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchActivity: activity => dispatch(fetchActivity(activity)),
    closeModal: () => dispatch(closeModal()),
    openModal: modal => dispatch(openModal(modal))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow);
