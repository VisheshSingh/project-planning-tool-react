import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SignedOutLinks extends Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/login">Log In</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedOutLinks;
