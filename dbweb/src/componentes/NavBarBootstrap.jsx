import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export function NavBarBootstrap() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="#home">C-C</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/abogados">Abogados</Nav.Link>
          <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

