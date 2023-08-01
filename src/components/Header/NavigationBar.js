import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "./CartButton";
import { NavLink, useLocation } from "react-router-dom";

const NavigationBar = (props) => {
    const location = useLocation();
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" className="p-1">
        <Container>
          <Nav className="m-auto">
            <NavLink
              to="/home"
              className=" pe-5"
              style={{ color: "white", fontFamily: "serif", fontSize: "18px", textDecoration: "none" }}
            >
              HOME
            </NavLink>
            <NavLink
              to="/store"
              className="pe-5"
              style={{ color: "white", fontFamily: "serif", fontSize: "18px", textDecoration: "none"  }}
            >
              STORE
            </NavLink>
            <NavLink
              to="/about"
              className=" pe-5"
              style={{ color: "white", fontFamily: "serif", fontSize: "18px", textDecoration: "none"  }}
            >
              ABOUT
            </NavLink>
          </Nav>
        </Container>
        {location.pathname === "/store" && <CartButton onOpen={props.onOpenCart}/>}
      </Navbar>
    </div>
  );
};

export default NavigationBar;
