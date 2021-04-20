import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.scss";

export default class Login extends Component {
  state = {
    formData: null,
  };

  handleChange = (e) => {
    //grab form data and set it to state
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    // submit it to backend to receive token
    e.preventDefault();
    axios.post("/api/users", this.state.formData).then((res) => {
      //get token from response
      const token = res.data.token;
      //save token in session storage
      sessionStorage.setItem("token", token);
      //navigate user to home page
      this.props.history.push("/");
    });
  };

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
                type="email"
                name="email"
              />
              <label className="login__form--label">Password</label>
              <input
                className="login__form--input password"
                type="password"
                name="password"
              />
              <button className="login__form--button">Login</button>
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
