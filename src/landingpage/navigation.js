import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import navigation from "../config/landingpage/navigation.json";

const Navigation = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="me-auto">
          {navigation.map((item) => (
            <Nav.Link href={item.linkTo} key={item.id}>
              <FormattedMessage id={item.id} />
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
