import TripItinerary from './trip_itinerary';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openModal: modal => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TripItinerary);
