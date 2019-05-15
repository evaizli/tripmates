import React from 'react';

class ActivityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.trip;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      return this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.closeModal());
  }

  render() {
      const {activityName,
            location,
            address,
            mates,
            tag,
            image,
            notes,
            startTime,
            endTime } = this.props.trip;

    return (
      <div>
            <form onClick ={this.handleSubmit}>
                <input
                    type="text"
                    value={activityName}
                    onChange={this.update("activityName")}
                />
                <input
                    type="text"
                    value={location}
                    onChange={this.update("location")}
                />
                <input
                    type="text"
                    value={address}
                    onChange={this.update("address")}
                />
                <input
                    type="text"
                    value={mates}
                    onChange={this.update("mates")}
                />
                <input 
                    type="text" 
                    value={tag} 
                    onChange={this.update("tag")} 
                />
                <input
                    type="text"
                    value={image}
                    onChange={this.update("image")}
                />
                <input
                    type="text"
                    value={notes}
                    onChange={this.update("notes")}
                />
                <input
                    type="text"
                    value={startTime}
                    onChange={this.update("startTime")}
                />
                <input
                    type="text"
                    value={endTime}
                    onChange={this.update("startTime")}
                />
                <input
                    type="submit"
                    value={endTime}
                    onChange={this.update("startTime")}
                />
            </form>
      </div>
    );
  }
}

export default ActivityForm;