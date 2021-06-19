import React, { useContext, useEffect, useState } from "react";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import LoginModal from "../LoginModal/LogInModal";
import SignUpModal from "../SignUpModal/SignUpModal";
import "./Header.scss";
import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { AppContext } from "../../AppContext/AppContext";

function Header() {
  const { currentUser, setCurrentUser, cart, categoryList, setIsSignedIn } =
    useContext(AppContext);
  const [logInModalShow, setLogInModalShow] = useState(false);
  const [signUpModalShow, setSignUpModalShow] = useState(false);
  const user = localStorage.getItem("user");

  useEffect(() => {
    setCurrentUser(user);
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
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    setCurrentUser(null);
    setIsSignedIn(false);
  };
  return (
    <nav className="nav">
      <Navbar className="nav__color" variant="dark" expand="sm">
        <Nav.Link className="nav__brand" href="/">
          eShop
        </Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              className="dropp"
              title={
                !cart?.cartQuantity ? (
                  <>
                    <ShoppingCartRoundedIcon />
                  </>
                ) : (
                  <>
                    <ShoppingCartRoundedIcon />
                    <Badge pill variant="light">
                      {cart.cartQuantity}
                    </Badge>
                  </>
                )
              }
            >
              {categoryList.map((cat) => {
                return (
                  <NavDropdown.Item
                    className="nav__link"
                    key={cat._id}
                    href={`/categories/${cat._id}`}
                  >
                    Shop {cat.name}
                  </NavDropdown.Item>
                );
              })}{" "}
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav__link" href="/cart">
                Your Cart
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={currentUser || "Guest"}
              id="dropdown-menu-align-right"
            >
              {currentUser ? (
                <NavDropdown.Item className="nav__link" onClick={handleSignOut}>
                  Sign Out
                </NavDropdown.Item>
              ) : (
                <>
                  <NavDropdown.Item onClick={handleLoginModalOpen}>
                    Log In
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="nav__link"
                    onClick={handleSignupModalOpen}
                  >
                    Create Account
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
            {/* <Nav.Link href="/cart">
             <ShoppingCartRoundedIcon className="nav__cart" />
            {!cart.cartQuantity ? null : (
               <Badge pill variant="light">
                 {cart.cartQuantity}
               </Badge>
             )}
           </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
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
    </nav>
  );
}

export default Header;
