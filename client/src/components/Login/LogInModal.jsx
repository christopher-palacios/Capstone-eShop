import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

class LoginModal extends Component {
  state = {
    formData: null,
  };

  handleChange = (e) => {
    //grab form data and set it to state
    console.log(e.target.value);
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = (e) => {
    console.log("this is first", e);
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
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <Modal
        {...this.props}
        className="login"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="login__card">
          <div className="login__welcome">
            <h1 className="login__welcome--title">Log In</h1>
            <button
              className="login__welcome--close"
              onClick={this.props.close}
            >
              X
            </button>
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
          <h5 onClick={this.props.close} className="login__redirect">
            Not a member?
            <Link to="/signup"> Sign Up </Link>
            here
          </h5>
        </div>
        {/* <Modal.Footer>
          <Button onClick={this.props.close}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );
  }
}

export default LoginModal;
