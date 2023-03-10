import React, { useRef } from "react"
import { Link } from "react-router-dom"
import * as API from '../servicios/servicios'


export function CrearAbogado() {
  const consulta = useRef();
  const consulta1 = useRef();
  const consulta2 = useRef();
  const consulta3 = useRef();
  const consulta4 = useRef();
  
  const guardar_abogado = ()=>{
      console.log('Llama a la funcion correctamente')
  const textInput = consulta.current.value;
  const textInput2 = consulta1.current.value;
  const textInput3 = consulta2.current.value;
  const textInput4 = consulta3.current.value;
  const textInput5 = consulta4.current.value;
  
      console.log('lo que está en el text input es ', textInput, textInput2, textInput3, textInput4, textInput5)
  const enviarInputText = {
    nombre: textInput,
    apellido: textInput2,
    matricula: textInput3,
    email: textInput4,
    telefono: textInput5
  }
      
      console.log(enviarInputText)
      API.GuardarAbogado(enviarInputText);
      consulta.current.value=null;
      alert('Se guardo correctamente el cliente. Gracias');
  
  }
  
      return (
        <>
        <div className="carta">
                <div className="cartacabeza">
                  <h1 className="titulito1">Nuevo Abogado</h1>
                </div>
              
              
              <div className="cartacuerpo">
              
              <form onSubmit={guardar_abogado}>
  
                <div className="form-group">
                  <label for="">Nombre</label>
                  <input required type="text" ref={consulta} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted"></small>
                </div>
  
                <div className="form-group">
                  <label for="">Apellido</label>
                  <input required type="text" ref={consulta1} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="">Matricula</label>
                  <input required type="text" ref={consulta2} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="">Correo Electronico</label>
                  <input required type="text" ref={consulta3} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="">Telefono</label>
                  <input required type="text" ref={consulta4} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">Sin 0 ni 15</small>
                </div>
                
  
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">Crear Abogado</button>
                  <Link to={'/abogadosadmin'}><button type="button" className="btn btn-secondary">Volver al Inicio</button></Link>
                </div>
  
              </form>
  
   
  
              </div>
  
  
  
  
            <div className="card-footer text muted">
            </div>
  
        </div>
        </>
        )
  }