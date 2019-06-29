import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { closeModal } from '../../actions/modal_actions';
import { updateActivity, deleteActivity } from "../../actions/activity_actions";

const mapStateToProps = state => {
    let activityId = state.ui.modal.activityId;
    let tripId = state.ui.modal.tripId;
    
    let activity;
    state.entities.trips[tripId].activities.forEach(a => {
        if (a._id === activityId){
            activity = a;
        }
    });

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
