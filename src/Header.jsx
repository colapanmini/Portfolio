import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      className="navigation-bar"
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="#">React App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              About <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
