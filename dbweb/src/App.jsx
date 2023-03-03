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
import BackgroundVideo from './componentes/BackgroundVideo'
import './App.css'
import BackgroundVideoMain from './componentes/BackgroundVideoMain'


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
    <div>
          {

            !sesion?
            <>
            <div><BackgroundVideo/></div>
            <div><Principal/></div>
            </>
            :
            <>
            <div><BackgroundVideoMain/></div>
            <div><PrincipalAdmin/></div>
            
            </>

          }
    </div>


    </>
  )
}

export default App
