import React, { useRef } from "react"
import { Link } from "react-router-dom"
import * as API from '../servicios/servicios'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function CrearConsulta() {

const consulta = useRef();
const consulta1 = useRef();
const consulta2 = useRef();
const consulta3 = useRef();
const consulta4 = useRef();
const consulta5 = useRef();

const [datos_consulta, setDatosConsulta] = useState('');
const {idabogados} = useParams();
const [mensajeExito, setMensajeExito] = useState('')
console.log('el parametro que me llega desde el Listado de Clientes es: ', idabogados)

useEffect(() =>{
  API.getAbogadosById(idabogados).then(setDatosConsulta)
}, [idabogados])

const guardar_consulta = ()=>{
    console.log('Llama a la funcion correctamente')
    const textInput = consulta.current.value;
    const textInput2 = consulta1.current.value;
    const textInput3 = consulta2.current.value;
    const textInput4 = consulta3.current.value;
    const textInput5 = consulta4.current.value;
    const textInput6 = consulta5.current.value;

    console.log('lo que está en el text input es ', textInput, textInput2, textInput3, textInput4, textInput5, textInput6)
const enviarInputText = {
  dni: textInput,
  nombre: textInput2,
  apellido: textInput3,
  domicilio: textInput4,
  telefono: textInput5,
  texto: textInput6,
  abogado_vinculado: idabogados
}
    
    console.log(enviarInputText)
    API.GuardarConsulta(enviarInputText);
    consulta.current.value=null;
    setMensajeExito('Se guardo la consulta correctamente')
      setTimeout(()=>{
        setMensajeExito('');
        window.location.reload(true)
      }, 3000)

}

    return (
      <div className="carta1">
        <div className="cartacabeza1">
          <h1 className="titulito1">Consultar al Abogado: {datos_consulta.apellido + ' ' + datos_consulta.nombre}</h1>
        </div>
            
            
            <div className="cartacuerpo1">

              {
              mensajeExito?
              <div className="alert alert-success" role="alert">{mensajeExito}</div>
              :''
              }
            
              <form onSubmit={guardar_consulta}>

              <div className="form-group">
                <label for="">Numero de Documento</label>
                <input required type="number" ref={consulta} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="textito">Sin Puntos</small>
              </div>

              <div className="form-group">
                <label for="">Nombre</label>
                <input required type="text" ref={consulta1} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="textito"></small>
              </div>

              <div className="form-group">
                <label for="">Apellido</label>
                <input required type="text" ref={consulta2} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="textito"></small>
              </div>

              <div className="form-group">
                <label for="">domicilio</label>
                <input required type="text" ref={consulta3} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="textito"></small>
              </div>

              <div className="form-group">
                <label for="">telefono</label>
                <input required type="number" ref={consulta4} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted"></small>
              </div>

              <div className="form-group">
                <label for="">Consulta</label>
                <input required type="text" ref={consulta5} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted"></small>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">Guardar Consulta</button>
                <Link to={'/abogados'}><button type="button" className="btn btn-secondary">Volver al Inicio</button></Link>
              </div>

            </form>

 

            </div>




          <div className="card-footer text muted">
            <p>Precio de Consulta: $5.000 || aliasMP: nahu.octa.cz</p><br />
            <p>Enviar comprobante a cabrera.nahueloctavio@gmail.com</p>
          </div>

      </div>
      )
  }