import React, { Component } from 'react';

class ProjectList extends Component {
  render() {
    return (
      <div className="project-list section">
        <div className="card z-depth-0 project-summary">
          <div className="card-content grey-text darken-3">
            <h2 className="card-title">Project Title</h2>
            <p className="postedBy">Posted by Net Ninja</p>
            <p className="grey-text">3rd September, 2am</p>
          </div>
        </div>
        <div className="card z-depth-0 project-summary">
          <div className="card-content grey-text darken-3">
            <h2 className="card-title">Project Title</h2>
            <p className="postedBy">Posted by Net Ninja</p>
            <p className="grey-text">3rd September, 2am</p>
          </div>
        </div>
        <div className="card z-depth-0 project-summary">
          <div className="card-content grey-text darken-3">
            <h2 className="card-title">Project Title</h2>
            <p className="postedBy">Posted by Net Ninja</p>
            <p className="grey-text">3rd September, 2am</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectList;
