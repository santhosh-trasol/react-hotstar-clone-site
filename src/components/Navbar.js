import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Img from "./images/d-logo.webp";
import "./Main.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img src={Img} className="logo-img" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link" href="#home">
              Home
            </Link>
            <Link to="/sports" className="nav-link" href="#Sports">
              Sports
            </Link>
            <Link to="/movies" className="nav-link" href="#Movies">
              Movies
            </Link>
            <Link className="nav-link kids" href="#Kids">
              KIDS
            </Link>
            <NavDropdown title="Languages" id="basic-nav-dropdown">
              <NavDropdown.Item className="d-item" href="#action/3.1">
                Tamil
              </NavDropdown.Item>
              <NavDropdown.Item className="d-item" href="#action/3.2">
                English
              </NavDropdown.Item>
              <NavDropdown.Item className="d-item" href="#action/3.3">
                Telgu
              </NavDropdown.Item>
              <NavDropdown.Item className="d-item" href="#action/3.4">
                Malayalam
              </NavDropdown.Item>
              <NavDropdown.Item className="d-item" href="#action/3.4">
                Hindi
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
