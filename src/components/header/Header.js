import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./Header.css";

export default class MenuBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="header__links">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{ color: "#000" }}>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/project">Projects</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
