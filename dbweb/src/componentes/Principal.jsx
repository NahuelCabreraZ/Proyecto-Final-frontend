import { Route, Routes } from 'react-router-dom'
import { NavBar } from "./NavBar";
import { ListadoAbogados } from './ListadoAbogados';
import { CrearConsulta } from './CrearConsulta';
import { Login } from './Login'

export function Principal() {
  return (
    <>
    <NavBar/>
      <div className="App">
        <h1>PAGINA PRINCIPAL</h1>
      </div>
      <Routes>
      <Route path='/abogados' element = {<ListadoAbogados/>}></Route>

      <Route path='/contacto' element = {<CrearConsulta/>}></Route>
      <Route path='/login' element = {<Login/>}></Route>
      </Routes>
    </>
    )
}