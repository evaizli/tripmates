import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import TripCreateFormContainer from '../trip_form/trip_create_form_container';
import TripDestinationEditFormContainer from '../trip_dash/trip_destination_edit_form_container';
import TripDestinationCreateFormContainer from '../trip_dash/trip_destination_create_form_container';
import CreateActivityFormContainer from "../activity/create_activity_container";
import ActivityShowContainer from "../activity/activity_show_container";
import ActivityEditContainer from "../activity/edit_activity_container";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case "login":
      component = <LoginFormContainer />;
      break;
    case "signup":
      component = <SignupFormContainer />;
      break;
    case "createTrip":
      component = <TripCreateFormContainer />;
      break;
    case "createDestination":
      component = <TripDestinationCreateFormContainer />;
      break;
    case "editDestination":
      component = <TripDestinationEditFormContainer />;
      break;
      case "activityShow":
        component = <ActivityShowContainer />;
        break;
    case "createActivity":
      component = <CreateActivityFormContainer />;
      break;
    case "editActivity":
      component = <ActivityEditContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <div className="modal-exit-button" onClick={closeModal} >&times;</div>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);