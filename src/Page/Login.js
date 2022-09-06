import React, { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { useState, useEffect } from "react";
import { getDataLogin } from "../redux/actions/authAction";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    const { email, password } = this.state;
    this.props.getDataLogin(email, password);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <input onChange={this.handleEmail} type="text" placeholder="email" />
        <input
          onChange={this.handlePassword}
          type="password"
          placeholder="password"
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  getDataLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
