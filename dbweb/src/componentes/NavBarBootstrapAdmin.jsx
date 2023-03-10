import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react"
import { Link } from "react-router-dom"


export function NavBarBootstrapAdmin() {

    const [sesion, setSesion] = useState('')

    const Logout = async(event)=>{

            setSesion('')
            window.localStorage.removeItem('saveUsuario');
            window.location.reload(true);
        }
    

  return (

    <Navbar className="barrita" variant="dark" expand="lg">
      <Navbar.Brand className="loguito" href=""><img src="/img/logo-small.png" width="40" height="40" alt=""/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/listarClientes">Clientes</Nav.Link>
          <Nav.Link href="/abogadosadmin">Abogados</Nav.Link>
          <Nav.Link href="/consultas">Consultas</Nav.Link>
        </Nav>
      </Navbar.Collapse>
        <div className="container">
          <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
                <button onClick={Logout} className="btn btn-danger">Salir</button>
              </li>
          </ul>
        </div>
    </Navbar>
  );
}
