import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { closeModal } from '../../actions/modal_actions';
import { updateActivity } from "../../actions/activity_actions";

const mapStateToProps = state => {
    let tripId = state.ui.modal.tripId;
    let activityId = state.ui.modal.id;
    let activity;
    state.entities.activities.forEach(a => {
        if (a._id === activityId){
            activity = a;
            activity["tripId"] = tripId
        }
    })
    return {
        activity,
        formType: "Edit Activity"
    };
};

const mapDispatchToProps = dispatch => {

    return {
        processForm: activity => dispatch(updateActivity(activity)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);
