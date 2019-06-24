import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignedInLinks extends Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/">New Project</NavLink>
        </li>
        <li>
          <NavLink to="/logout">Log out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink darken-2">
            NN
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedInLinks;
