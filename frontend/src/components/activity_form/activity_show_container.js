import { connect } from "react-redux";
import ActivityShow from "./activity_form";
import { closeModal } from "../../actions/modal_actions";
import { fetchActivity } from "../../actions/activity_actions";

const mapStateToProps = state => {
  return {
    // trip: 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchActivity: activity => dispatch(fetchActivity(activity)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityShow);
