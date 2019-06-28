import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions/authActions';

class SignedInLinks extends Component {
  render() {
    const { signOut } = this.props;
    return (
      <ul className="right">
        <li>
          <NavLink to="/create">New Project</NavLink>
        </li>
        <li>
          <a href="!#" onClick={signOut}>
            Log out
          </a>
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

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
