import React, { useEffect, useState } from "react";
import LoginModal from "../LoginModal/LogInModal";
import "./Header.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  const [modalShow, setModalShow] = useState(false);
  const [user, setUser] = useState("Guest");

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    setUser(user);
  }, []);

  const handleModalOpen = () => {
    setModalShow(true);
  };
  const handleModalClose = () => {
    setModalShow(false);
  };

  return (
    <Navbar className="nav__color" variant="dark" expand="md">
      <Navbar.Brand className="nav__brand" href="/">
        eShop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link onClick={handleModalOpen}>
            {!user ? "Guest" : user}
          </Nav.Link>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item className="nav__link" href="/categories">
              Categories
            </NavDropdown.Item>
            <NavDropdown.Item className="nav__link" href="/signup">
              Sign Up
            </NavDropdown.Item>
            <NavDropdown.Item className="nav__link" href="/cart">
              Cart #
            </NavDropdown.Item>
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

      <LoginModal
        onHide={handleModalClose}
        show={modalShow}
        close={handleModalClose}
      />
    </Navbar>
  );
}

export default Header;
