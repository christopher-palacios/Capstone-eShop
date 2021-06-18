import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { AppContext } from "../../AppContext/AppContext";

// const baseUrl = "https://e-shop-cp.herokuapp.com/api";

function SignUpModal(props) {
  const { baseUrl } = useContext(AppContext);
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    //get form data and set it to state
    console.log(e.target.name);
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // submit it to backend to receive token
    axios
      .post(`${baseUrl}/users`, formData)
      .then((res) => {
        //get token from response
        const token = res.data.token;
        //save token in session storage
        sessionStorage.setItem("token", token);
        //navigate user to home page
        this.props.history.push("/");
      })
      .catch((err) => alert(err));
  };

  return (
    <Modal {...props} className="login" size="lg" centered>
      <div className="login__card">
        <div className="login__welcome">
          <h1 className="login__welcome--title">Get Started</h1>
        </div>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form--card">
            <label className="login__form--label">First Name</label>
            <input
              className="login__form--input firstName"
              onChange={handleChange}
              type="firstName"
              name="firstName"
            />
            <label className="login__form--label">Last Name</label>
            <input
              className="login__form--input lastName"
              onChange={handleChange}
              type="lastName"
              name="lastName"
            />
            <label className="login__form--label">Email</label>
            <input
              className="login__form--input email"
              onChange={handleChange}
              type="email"
              name="email"
            />
            <label className="login__form--label">Password</label>
            <input
              className="login__form--input password"
              onChange={handleChange}
              type="password"
              name="password"
            />
            <button className="login__form--button">Sign Up</button>
          </div>
        </form>
        <h5 className="login__redirect">
          If already registered.
          <Link onClick={props.signupSwitch} to="">
            {" "}
            Log In{" "}
          </Link>
          here
        </h5>
      </div>
    </Modal>
  );
}

export default SignUpModal;
