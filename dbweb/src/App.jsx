import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Principal } from './componentes/Principal'
import { ListadoAbogados } from './componentes/ListadoAbogados'
import { CrearConsulta } from './componentes/crearConsulta'
import { CrearClientes } from './componentes/crearClientes'
import { ListadoClientes } from './componentes/ListadoClientes'
import { Login } from './componentes/Login'
import { NavBar } from './componentes/NavBar'
import { PrincipalAdmin } from './componentes/PrincipalAdmin'



function App() {

        const [sesion, setSesion] = useState('');
        useEffect(()=>{

          const sesionLogeada = JSON.parse(localStorage.getItem('saveUsuario'))
          if(sesionLogeada){
            setSesion(sesionLogeada)
            console.log('sesion logeada', sesionLogeada)
          }

          
        },[])

  return (
    <>
    {

      !sesion?
      <Principal/>:
      <PrincipalAdmin/>

      

    }



    </>
  )
}

export default App
