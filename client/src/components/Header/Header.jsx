import React, { useEffect, useState } from "react";
import LoginModal from "../LoginModal/LogInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import "./Header.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  const [logInModalShow, setLogInModalShow] = useState(false);
  const [signUpModalShow, setSignUpModalShow] = useState(false);
  const [user, setUser] = useState("Guest");

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    setUser(user);
  }, []);

  //LogIn Modal Switches
  const handleLoginModalOpen = () => {
    setLogInModalShow(true);
  };
  const handleLoginModalClose = () => {
    setLogInModalShow(false);
  };
  const handleLoginModalSwitch = () => {
    setLogInModalShow(false);
    setSignUpModalShow(true);
  };

  //SignUp Modal Show
  const handleSignupModalOpen = () => {
    setSignUpModalShow(true);
  };
  const handleSignupModalClose = () => {
    setSignUpModalShow(false);
  };
  const handleSignupModalSwitch = () => {
    setSignUpModalShow(false);
    setLogInModalShow(true);
  };

  //Sign user out by removing token and user from session storage
  const handleSignOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
  };

  return (
    <Navbar className="nav__color" variant="dark" expand="lg">
      {/* <Navbar.Brand className="nav__brand" href="/">
        eShop
      </Navbar.Brand> */}

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          {!user ? (
            <Nav.Link onClick={handleLoginModalOpen}>Log In</Nav.Link>
          ) : (
            <Nav.Link disabled>{user}</Nav.Link>
          )}

          <NavDropdown title="Shop" id="basic-nav-dropdown ">
            <NavDropdown.Item className="nav__link" href="/categories">
              Categories
            </NavDropdown.Item>
            <NavDropdown.Item className="nav__link" href="/cart">
              Cart
            </NavDropdown.Item>
            {!user ? (
              <NavDropdown.Item
                className="nav__link"
                onClick={handleSignupModalOpen}
              >
                Sign Up
              </NavDropdown.Item>
            ) : (
              <NavDropdown.Item className="nav__link" onClick={handleSignOut}>
                Sign Out
              </NavDropdown.Item>
            )}

            <NavDropdown.Divider />
            <NavDropdown.Item className="nav__link" href="#return-policy">
              Return Policy
            </NavDropdown.Item>
            <NavDropdown.Item className="nav__link" href="#contact-us">
              Contact Us
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand className="nav__brand" href="/">
        eShop
      </Navbar.Brand>
      <LoginModal
        onHide={handleLoginModalClose}
        show={logInModalShow}
        loginClose={handleLoginModalClose}
        loginSwitch={handleLoginModalSwitch}
      />
      <SignUpModal
        onHide={handleSignupModalClose}
        show={signUpModalShow}
        showLogin={logInModalShow}
        signupClose={handleSignupModalClose}
        signupSwitch={handleSignupModalSwitch}
      />
    </Navbar>
  );
}

export default Header;
