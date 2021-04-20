import React from "react";
import "./Header.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    //look into user specific greeting .. {Sign In || User Name}
    //make cart dynamic showing # of items
    <Navbar className="nav__color" variant="dark" expand="md">
      {/* <nav className="nav-bar"> */}
      <Navbar.Brand className="nav__brand" href="/">
        eShop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Log in</Nav.Link>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item className="nav__link" href="/shop/new">
              Whats New
            </NavDropdown.Item>
            <NavDropdown.Item className="nav__link" href="/shop/sale">
              On Sale
            </NavDropdown.Item>
            <NavDropdown.Item className="nav__link" href="/shop/categories">
              Categories
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="nav__link" href="/login">
              Log In
            </NavDropdown.Item>
            <NavDropdown.Item className="nav__link" href="/shop/categories">
              Cart #
            </NavDropdown.Item>
            <NavDropdown.Item className="nav__link" href="#return-policy">
              Return Policy
            </NavDropdown.Item>
            <NavDropdown.Item className="nav__link" href="#contact-us">
              Contact Us
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      {/* </nav> */}
    </Navbar>
  );
}

export default Header;
