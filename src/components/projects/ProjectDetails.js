import React, { Component } from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class ProjectDetails extends Component {
  render() {
    const { project, auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;
    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p className="grey-text">{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                Posted By {project.firstname} {project.lastname}
              </div>
              <p>
                {project.createdAt
                  ? project.createdAt.toDate().toDateString()
                  : ''}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="container">Loading Post...</div>;
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects || state.project.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
