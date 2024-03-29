import React, { Component } from "react";
import Moment from "react-moment";

class ProfileCreds extends Component {
  render() {
    const { activity, education } = this.props;

    const actItems = activity.map(act => (
      <li key={act._id} className="list-group-item">
        <h4>{act.wannabe}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{act.from}</Moment> -
          {act.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{act.to}</Moment>
          )}
        </p>
        <p>
          <strong>Position: </strong>
          {act.title}
        </p>
        <p>
          {act.subject === "" ? null : (
            <span>
              <strong>Subject: </strong>
              {act.subject}
            </span>
          )}
        </p>
        <p>
          {act.decription === "" ? null : (
            <span>
              <strong>Description: </strong>
              {act.description}
            </span>
          )}
        </p>
      </li>
    ));

    const eduItems = education.map(edu => (
      <li key={edu._id} className="list-group-item">
        <h4>{edu.college}</h4>
        <p>
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> -
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{edu.to}</Moment>
          )}
        </p>
        <p>
          <strong>Degree: </strong>
          {edu.degree}
        </p>
        <p>
          <strong>Field of Study: </strong>
          {edu.fieldofstudy}
        </p>
        <p>
          {edu.decription === "" ? null : (
            <span>
              <strong>Description: </strong>
              {edu.description}
            </span>
          )}
        </p>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Activity</h3>
          {actItems.length > 0 ? (
            <ul className="list-group">{actItems}</ul>
          ) : (
            <p className="text-center">No Activity Listed</p>
          )}
        </div>

        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          {eduItems.length > 0 ? (
            <ul className="list-group">{eduItems}</ul>
          ) : (
            <p className="text-center">No Education Listed</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
