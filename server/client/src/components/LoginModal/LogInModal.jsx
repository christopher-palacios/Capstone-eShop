import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import swal from "sweetalert";
import axios from "axios";
import "./LoginModal.scss";
import { AppContext } from "../../AppContext/AppContext";

function LogInModal(props) {
  const { setCurrentUser, setIsSignedIn } = useContext(AppContext);
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    //get form data and set it to state
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // submit it to backend to receive token
    e.preventDefault();
    axios
      .post("https://localhost:8080/api/users/login", formData)
      .then((res) => {
        //get token from response
        const token = res.data.token;
        //get user info from response
        const { firstName, _id } = res.data.user;
        const user = firstName;
        //save token in session storage
        localStorage.setItem("token", token);
        //save user in session storage
        localStorage.setItem("user", user);
        //save user id in session storage
        localStorage.setItem("userId", _id);
        setIsSignedIn(true);
        setCurrentUser(user);
        localStorage.removeItem("guestCart");
      })
      .catch((err) =>
        swal({ text: "Check your email/password and try again" })
      );
  };

  return (
    <Modal {...props} className="login" size="lg" centered>
      <div className="login__card">
        <div className="login__welcome">
          <h1 className="login__welcome--title">Log In</h1>
          <button className="login__welcome--close" onClick={props.loginClose}>
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
            <button className="login__form--button" onClick={props.loginClose}>
              Login
            </button>
          </div>
        </form>
        <h5 className="login__redirect">
          Not a member?
          <Link onClick={props.loginSwitch} to="">
            {" "}
            Sign Up{" "}
          </Link>
          here
        </h5>
      </div>
    </Modal>
  );
  // }
}

export default LogInModal;
