import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Login.scss";

export default class Login extends Component {
  render() {
    return (
      <section className="login">
        <div className="login__card">
          <div className="login__welcome">
            <h1 className="login__welcome--title">Log In</h1>
          </div>
          <form className="login__form" onSubmit={this.handleSubmit}>
            <div className="login__form--card">
              <label className="login__form--label">Email</label>
              <input
                className="login__form--input email"
                onChange={this.handleChange}
                type="email"
                name="email"
              />
              <label className="login__form--label">Password</label>
              <input
                className="login__form--input password"
                onChange={this.handleChange}
                type="password"
                name="password"
              />
              <button
                className="login__form--button"
                onClick={this.handleSubmit}
              >
                Login
              </button>
            </div>
          </form>
          <h5 className="login__redirect">
            Not a member?
            <Link to="/signup"> Sign Up </Link>
            here
          </h5>
          {/* <h5 className="login__redirect">
            if already registered
            <Link to="/login"> log in </Link>
            here
          </h5> */}
        </div>
      </section>
    );
  }
}
