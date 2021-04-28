import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import axios from "axios";
import "./Login.scss";

function LogInModal(props) {
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    //get form data and set it to state
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // submit it to backend to receive token
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/users/login", this.state.formData)
      .then((res) => {
        //get token from response
        const token = res.data.token;
        //get user from response
        const { firstName, lastName } = res.data.user;
        const user = firstName + " " + lastName;
        //save token in session storage
        sessionStorage.setItem("token", token);
        //save user in session storage
        sessionStorage.setItem("user", user);
        //navigate user to home page
        // this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Modal
      {...props}
      className="login"
      size="lg"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="login__card">
        <div className="login__welcome">
          <h1 className="login__welcome--title">Log In</h1>
          <button className="login__welcome--close" onClick={props.close}>
            X
          </button>
        </div>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form--card">
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
            <button className="login__form--button" onClick={props.close}>
              Login
            </button>
          </div>
        </form>
        <h5 onClick={props.close} className="login__redirect">
          Not a member?
          <Link to="/signup"> Sign Up </Link>
          here
        </h5>
      </div>
      {/* <Modal.Footer>
          <Button onClick={props.close}>Close</Button>
        </Modal.Footer> */}
    </Modal>
  );
  // }
}

export default LogInModal;
