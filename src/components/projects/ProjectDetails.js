import React, { Component } from 'react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';

class ProjectDetails extends Component {
  render() {
    const { project } = this.props;
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
              <p>3rd October, 1pm</p>
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
    project: project
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
