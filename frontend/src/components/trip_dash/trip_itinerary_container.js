import TripItinerary from './trip_itinerary';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    activities: [
      { 
        activityName: "Buffet with tripmates",
        activityLocation: "Cesaer's Palace - Bachannal",
        Address: undefined,
        activityTag: "Food",
        activityDate: "2019-10-10",
        activityStartTime: "12:00PM",
        activityEndTime: "2:00PM",
        activityMates: ["Andrew", "Eve", "Jeff"],
        activityNotes: ""
      },
      {
        activityName: "Buffet with tripmates",
        activityLocation: "Wynn - The Buffet",
        Address: undefined,
        activityTag: "Food",
        activityDate: "2019-10-11",
        activityStartTime: "12:00PM",
        activityEndTime: "2:00PM",
        activityMates: ["Andrew", "Eve", "Jeff"],
        activityNotes: ""
      }
    ]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripItinerary);
