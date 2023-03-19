import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route, Routes, Link } from "react-router-dom";
import './css/Navbar.css';
import About from "./official-site/nav-items/About";
import Contact from "./official-site/nav-items/Contact";
import Home from "./official-site/nav-items/Home";
import Error from "./official-site/nav-items/Error";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
  return (
    <>
      <Navbar className="OffNav" variant="dark" expand="lg">
        <Container fluid>
          {/* <Navbar.Brand href="#">Dashboard</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
              {/* <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" disabled>You are on Admin page</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Log out
              </NavDropdown.Item>
            </NavDropdown> */}
              {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
            </Nav>
            <Nav>
              <Button variant="light" className="login-bt">Login</Button>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default NavScrollExample;