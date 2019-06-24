import React, { Component } from 'react';

class ProjectDetails extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Project Title - {id}</span>
            <p className="grey-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi in
              quas eius accusantium, a reiciendis ad, ipsa ipsum sequi expedita
              excepturi laboriosam. Atque, temporibus aspernatur.
            </p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted By Net Ninja</div>
            <p>3rd October, 1pm</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetails;
