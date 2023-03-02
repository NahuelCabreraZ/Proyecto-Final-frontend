import React, { useRef } from "react"
import { Link } from "react-router-dom"
import * as API from '../servicios/servicios'

export function CrearConsulta() {

const consulta = useRef();
const consulta1 = useRef();
const consulta2 = useRef();
const consulta3 = useRef();
const consulta4 = useRef();
const consulta5 = useRef();

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
  abogado_vinculado: 1
}
    
    console.log(enviarInputText)
    API.GuardarConsulta(enviarInputText);
    consulta.current.value=null;
    alert('Se guardo correctamente la consulta. Gracias');

}

    return (
      <div className="card">
              <div className="card-header">Creacion de Consulta</div>
            
            
            <div className="card-body">
            
            <div>

              <div className="form-group">
                <label for="">Numero de Documento</label>
                <input type="text" ref={consulta} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted">Sin Puntos</small>
              </div>

              <div className="form-group">
                <label for="">Nombre</label>
                <input type="text" ref={consulta1} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted"></small>
              </div>

              <div className="form-group">
                <label for="">Apellido</label>
                <input type="text" ref={consulta2} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted"></small>
              </div>

              <div className="form-group">
                <label for="">domicilio</label>
                <input type="text" ref={consulta3} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted"></small>
              </div>

              <div className="form-group">
                <label for="">telefono</label>
                <input type="text" ref={consulta4} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted"></small>
              </div>

              <div className="form-group">
                <label for="">Consulta</label>
                <input type="text" ref={consulta5} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                <small id="helpId" className="text-muted"></small>
              </div>

              <select className="form-select" aria-label="Default select example">
                <option selected>Abogado Vinculado</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <div className="form-group">
                <button onClick={guardar_consulta} type="button" className="btn btn-primary">Guardar Consulta</button>
                <Link to={'/abogados'}><button type="button" className="btn btn-secondary">Volver al Inicio</button></Link>
              </div>

            </div>

 

            </div>




          <div className="card-footer text muted">
          </div>

      </div>
      )
  }