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
      },
      {
        activityName: "Watch KA",
        activityLocation: "MGM Grand",
        Address: undefined,
        activityTag: "Entertainment",
        activityDate: "2019-10-10",
        activityStartTime: "8:00PM",
        activityEndTime: "10:00PM",
        activityMates: ["Andrew", "Eve", "Jeff"],
        activityNotes: ""
      },
      {
        activityName: "Gamble",
        activityLocation: "Palazzo",
        Address: undefined,
        activityTag: "Entertainment",
        activityDate: "2019-10-12",
        activityStartTime: "3:00PM",
        activityEndTime: "6:00PM",
        activityMates: ["Andrew", "Eve", "Jeff"],
        activityNotes: ""
      },
      {
        activityName: "Go Climb!",
        activityLocation: "Red Rocks",
        Address: undefined,
        activityTag: "Entertainment",
        activityDate: "2019-10-20",
        activityStartTime: "3:00PM",
        activityEndTime: "6:00PM",
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
