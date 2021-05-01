import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    //grab form data and set it to state
    console.log(e.target.name);
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // submit it to backend to receive token
    // e.preventDefault();
    axios
      .post("http://localhost:8080/api/users", formData)
      .then((res) => {
        //get token from response
        const token = res.data.token;
        //save token in session storage
        sessionStorage.setItem("token", token);
        //navigate user to home page
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    // <div>
    //   <h1>Login</h1>
    //   <form onSubmit={this.handleSubmit}>
    //     <label>Email</label>
    //     <input type="email" name="email" onChange={this.handleChange} />
    //     <label>Password</label>
    //     <input type="password" name="password" onChange={this.handleChange} />
    //     <button>Login</button>
    //   </form>
    // </div>
    <section className="signUp">
      <div className="signUp__card">
        <div className="signUp__welcome">
          <h1 className="signUp__welcome--title">Get Started</h1>
        </div>
        <form className="signUp__form" onSubmit={handleSubmit}>
          <div className="signUp__form--card">
            <label className="signUp__form--label">First Name</label>
            <input
              className="signUp__form--input firstName"
              onChange={handleChange}
              type="firstName"
              name="firstName"
            />
            <label className="signUp__form--label">Last Name</label>
            <input
              className="signUp__form--input lastName"
              onChange={handleChange}
              type="lastName"
              name="lastName"
            />
            <label className="signUp__form--label">Email</label>
            <input
              className="signUp__form--input email"
              onChange={handleChange}
              type="email"
              name="email"
            />
            <label className="signUp__form--label">Password</label>
            <input
              className="signUp__form--input password"
              onChange={handleChange}
              type="password"
              name="password"
            />
            <button
              // onClick={this.handleSubmit}
              className="signUp__form--button"
            >
              Sign Up
            </button>
          </div>
        </form>
        <h5 className="signUp__redirect">
          If already registered.
          <Link to="/login"> Log In </Link>
          here
        </h5>
      </div>
    </section>
  );
}
export default SignUp;
