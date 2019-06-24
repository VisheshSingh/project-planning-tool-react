import React, { Component } from 'react';

class ProjectSummary extends Component {
  render() {
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Project Title</span>
          <p className="postedBy">Posted by Net Ninja</p>
          <p className="grey-text">3rd September, 2am</p>
        </div>
      </div>
    );
  }
}

export default ProjectSummary;
