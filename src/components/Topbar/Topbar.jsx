// Topbar.js
import './Topbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';

const Topbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-transparent shadow-sm">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            Resume
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center d-flex justify-content-center align-items-center">
              <Nav.Link as={Link} to="/home" className="text-secondary fw-bold">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-secondary fw-bold">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-secondary fw-bold">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/career" className="text-secondary fw-bold">
                Career
              </Nav.Link>
              <Nav.Link className="text-secondary fw-bold text-decoration-none border-0">
                <Button as={Link} to="/login" size="sm" className="bg_login fw-bold text-decoration-none border-0">
                  Login
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
