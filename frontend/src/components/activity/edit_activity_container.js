import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { closeModal } from '../../actions/modal_actions';
import { updateActivity, deleteActivity, clearActivityErrors } from "../../actions/activity_actions";

const mapStateToProps = state => {
    const tripId = state.ui.modal.tripId;
    const activityId = state.ui.modal.activityId;
    const activity = state.entities.activities[tripId][activityId];

    return {
        activity,
        formType: "Edit Activity",
        errors: Object.values(state.errors.activity)
    };
};

const mapDispatchToProps = dispatch => {

    return {
        processForm: activity => dispatch(updateActivity(activity)),
        deleteActivity: (data) => dispatch(deleteActivity(data)),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearActivityErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);
