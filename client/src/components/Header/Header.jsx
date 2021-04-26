import React, { Component } from "react";
import LoginModal from "../Login/LogInModal";
import "./Header.scss";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
// import axios from "axios";

class Header extends Component {
  // const [modalShow, setModalShow] = React.useState(false);

  state = {
    modalShow: false,
    user: "",
  };
  componentDidMount() {
    const user = sessionStorage.getItem("user");
    this.setState({ user });
  }

  handleModalOpen = () => {
    this.setState({ modalShow: true });
  };
  handleModalClose = () => {
    this.setState({ modalShow: false });
  };
  render() {
    const { user } = this.state;
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
            <Nav.Link onClick={this.handleModalOpen}>
              {!user ? "Guest" : user}
            </Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item className="nav__link" href="/categories">
                Categories
              </NavDropdown.Item>
              <NavDropdown.Item className="nav__link" href="/signup">
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item className="nav__link" href="/shop/categories">
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
        {/* </nav> */}
        {/* <Button variant="primary" onClick={this.handleModalOpen}>
          Launch vertically centered modal
        </Button> */}

        <LoginModal show={this.state.modalShow} close={this.handleModalClose} />
      </Navbar>
    );
  }
}

export default Header;
