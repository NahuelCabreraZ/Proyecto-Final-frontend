import { Link } from "react-router-dom"
export function NavBar(){
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
            <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/abogados">Abogados</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Iniciar Sesion</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
}