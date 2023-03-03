import { useState } from "react"
import { Link } from "react-router-dom"

export function NavBarAdmin(){

    const [sesion, setSesion] = useState('')

    const Logout = async(event)=>{

            setSesion('')
            window.localStorage.removeItem('saveUsuario');
            window.location.reload(true);
        }
    

    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">♥</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/PrincipalAdmin">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listarClientes">Clientes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/abogadosadmin">Abogados</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
                <button onClick={Logout} className="btn btn-danger">Salir</button>
              </li>
          </ul>
        </div>
      </nav>
    )
    }