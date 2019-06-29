import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { closeModal } from '../../actions/modal_actions';
import { updateActivity, deleteActivity } from "../../actions/activity_actions";

const mapStateToProps = state => {
    const tripId = state.ui.modal.tripId;
    const activityId = state.ui.modal.activityId;
    const activity = state.entities.activities[tripId][activityId];

    return {
        activity,
        formType: "Edit Activity"
    };
};

const mapDispatchToProps = dispatch => {

    return {
        processForm: activity => dispatch(updateActivity(activity)),
        deleteActivity: (payload) => dispatch(deleteActivity(payload)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);
