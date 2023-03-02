import { useState } from "react"

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
                <a className="nav-link active" aria-current="page" href="/PrincipalAdmin">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/listarClientes">Clientes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/abogadosadmin">Abogados</a>
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