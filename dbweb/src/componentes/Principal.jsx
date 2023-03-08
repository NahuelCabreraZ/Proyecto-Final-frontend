import { Route, Routes } from 'react-router-dom'
import { NavBar } from "./NavBar";
import { ListadoAbogados } from './ListadoAbogados';
import { CrearConsulta } from './CrearConsulta';
import { Login } from './Login'
import { NavBarBootstrap } from './NavBarBootstrap';


export function Principal() {
  return (
    <>
    <NavBarBootstrap/>
      <div className="App">
      </div>
      <Routes>
      <Route path='/abogados' element = {<ListadoAbogados/>}></Route>
      <Route path='/contacto/:idabogados' element = {<CrearConsulta/>}></Route>
      <Route path='/login' element = {<Login/>}></Route>
      </Routes>
    </>
    )
}