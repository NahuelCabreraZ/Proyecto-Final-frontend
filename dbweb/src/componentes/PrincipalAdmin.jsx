import {NavBarBootstrapAdmin} from './NavBarBootstrapAdmin'
import { Route, Routes } from 'react-router-dom'
import { ListadoAbogadosAdmin } from './ListadoAbogadosAdmin'
import { CrearConsulta } from './CrearConsulta'
import { CrearClientes } from './CrearClientes'
import { ListadoClientes } from './ListadoClientes'
import { RegistroUsuario } from './RegistroUsuario'
import { CrearAbogado } from './AgregarAbogado'
import BackgroundVideo from './BackgroundVideo'
import { EditarCliente } from './EditarCliente'
import { ListaConsultas } from './ConsultasAdmin'

export function PrincipalAdmin() {
    return (
      <>

      <NavBarBootstrapAdmin/>
        <div className="App">
        </div>
        <div>
        <div className='container'>
        
        <Routes>
        
        <Route path='/abogadosadmin' element = {<ListadoAbogadosAdmin/>}></Route>
    
        <Route path='/contacto' element = {<CrearConsulta/>}></Route>
    
        <Route path='/crearClientes' element = {<CrearClientes/>}></Route>
    
        <Route path='/listarClientes' element = {<ListadoClientes/>}></Route>

        <Route path='/registroUsuario' element = {<RegistroUsuario/>}></Route>

        <Route path='/agregarabogado' element = {<CrearAbogado/>}></Route>

        <Route path='/editarcliente/:idclientes' element = {<EditarCliente/>}></Route>

        <Route path='/consultas' element = {<ListaConsultas/>}></Route>

        </Routes>
    
        </div>
        </div>

      </>
      )
  }