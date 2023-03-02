import React, { useRef } from "react"
import { Link } from "react-router-dom"
import * as API from '../servicios/servicios'


export function RegistroUsuario() {
  const consulta = useRef();
  const consulta1 = useRef();
  
  const guardar_usuario = ()=>{
      console.log('Llama a la funcion correctamente')
  const textInput = consulta.current.value;
  const textInput2 = consulta1.current.value;
  
      console.log('lo que está en el text input es ', textInput, textInput2)
  const enviarInputText = {
    user: textInput,
    password: textInput2,
    id_login_abogado: 1
  }
      
      console.log(enviarInputText)
      API.GuardarUsuario(enviarInputText);
      consulta.current.value=null;
      alert('Se guardo correctamente el usuario. Gracias');
  
  }
  
      return (
        <>
        <div className="card">
                <div className="card-header">Creacion de Usuarios</div>
              
              
        <div className="card-body">
              
            <form onSubmit={guardar_usuario}>
                <div className="form-group">
                  <label for="">Nombre de Usuario</label>
                  <input required type="text" ref={consulta} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">Sin puntos, solo numeros</small>
                </div>
  
                <div className="form-group">
                  <label for="">Contraseña</label>
                  <input required type="password " ref={consulta1} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">&nbsp;</small>
                </div>
  
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">Guardar Usuario</button>
                  <Link to={'/abogadosadmin'}><button type="button" className="btn btn-secondary">Volver al Inicio</button></Link>
                </div>

                </form>
   
  
        </div>
  

  
  
            <div className="card-footer text muted"></div>
  
        </div>
        </>
        )
  }