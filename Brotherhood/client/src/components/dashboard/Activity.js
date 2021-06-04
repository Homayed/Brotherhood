import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteActivity } from "../../actions/profileActions";

class Activity extends Component {
  onDeleteClick(id) {
    this.props.deleteActivity(id);
  }

  render() {
    const activity = this.props.activity.map(act => (
      <tr key={act._id}>
        <td>{act.wannabe}</td>
        <td>{act.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{act.from}</Moment> -
          {act.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{act.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, act._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Activity Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Want To Be/ Current Job</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
            {activity}
          </thead>
        </table>
      </div>
    );
  }
}

Activity.propTypes = {
  deleteActivity: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteActivity }
)(Activity);
