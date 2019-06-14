import { connect } from "react-redux";
import ActivityForm from "./activity_form";
import { closeModal } from '../../actions/modal_actions';
import { createActivity } from "../../actions/activity_actions";

const mapStateToProps = state => {
    let activityId = state.ui.modal.id;
    let activity;
    state.entities.activities.forEach(a => {
        if (a._id === activityId){
            activity = a;
        }
    })
   debugger
    return {
        activity,
        formType: "Edit Activity"
    };
};

const mapDispatchToProps = dispatch => {

    return {
        processForm: activity => dispatch(createActivity(activity)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityForm);
