import React, { useRef } from "react"
import { Link } from "react-router-dom"
import * as API from '../servicios/servicios'
import { useState, useEffect } from "react";

export function CrearClientes() {
  const consulta = useRef();
  const consulta1 = useRef();
  const consulta2 = useRef();
  const consulta3 = useRef();
  const consulta4 = useRef();
  const consulta5 = useRef();

  //Trae los abogados para desplegarlos en las opciones del select de abajo

  const [abogados, setAbogados] = useState([]);
  const [selector, setSelector] = useState([]);



  useEffect(() =>{
    API.getAbogados().then(setAbogados)
  }, [])


  //Inicia la funcion de submitear y manda la data al servidor
  const guardar_cliente = ()=>{

      console.log('Llama a la funcion correctamente')
  const textInput = consulta.current.value;
  const textInput2 = consulta1.current.value;
  const textInput3 = consulta2.current.value;
  const textInput4 = consulta3.current.value;
  const textInput5 = consulta4.current.value;
  const textInput6 = consulta5.current.value;
  const textInput7 = selector;
  const textInput8 = parseInt(textInput7)
      console.log("selector", selector)
      console.log('lo que está en el text input7 es ', textInput7)
  const enviarInputText = {
    dni: textInput,
    nombre: textInput2,
    apellido: textInput3,
    email: textInput4,
    telefono: textInput5,
    domicilio: textInput6,
    abogado_bond: textInput8 
  }
      console.log("envia el json: ",enviarInputText)
      API.GuardarClienteSsj(enviarInputText);
      alert('Se guardo correctamente el cliente. Gracias');
  
  }
  
      return (
        <div className="card">
                <div className="card-header">Creacion de Clientes</div>
              
              
              <div className="card-body">
              
              <form onSubmit={guardar_cliente}>
  
                <div className="form-group">
                  <label for="">Numero de Documento</label>
                  <input required type="number" ref={consulta} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">Sin puntos, solo numeros</small>
                </div>
  
                <div className="form-group">
                  <label for="">Nombre</label>
                  <input required type="text" ref={consulta1} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="">Apellido</label>
                  <input required type="text" ref={consulta2} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="">Correo Electronico</label>
                  <input required type="email" ref={consulta3} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="">Telefono</label>
                  <input required type="number" ref={consulta4} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted"></small>
                </div>
                
                <div className="form-group">
                  <label for="">Domicilio</label>
                  <input required type="text" ref={consulta5} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted"></small>
                </div>
                
                <div>

                <select onChange={(event) => setSelector(parseInt(event.target.value))}>
                  {abogados.map((abogado) => (
                    <option key={abogado.idabogados} value={abogado.idabogados} >{abogado.nombre} {abogado.apellido}</option>
                  ))}
                </select>

                </div>
  
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">Guardar Consulta</button>
                  <Link to={'/listarClientes'}><button type="button" className="btn btn-secondary">Volver al Inicio</button></Link>
                </div>


  
              </form>
  
   
  
              </div>
  
  
  
  
            <div className="card-footer text muted">
            </div>
  
        </div>
          
        )

  }