import { connect } from "react-redux";
import ActivityShow from "../activity_form/activity_show";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchActivity } from "../../actions/activity_actions";

const mapStateToProps = (state, ownProps) => {
  let tripId = state.ui.modal.tripId;
  let activityId = state.ui.modal.id;
  let activity;
  state.entities.activities.forEach(a => {
      if (a._id === activityId){
        activity = a;
      }
  })
  return {
    activity,
    formType: "Activity Show",
    tripId
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
