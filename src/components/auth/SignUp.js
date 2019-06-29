import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="row">
            <div className="col s12 m5">
              <div className="input-field">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  onChange={this.handleChange}
                />
              </div>
              <div className="input-field">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" onChange={this.handleChange} />
              </div>
            </div>
            <div className="col s12 m5 offset-m2">
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="input-field center">
            <button className="btn z-depth-0 pink">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(SignUp);
