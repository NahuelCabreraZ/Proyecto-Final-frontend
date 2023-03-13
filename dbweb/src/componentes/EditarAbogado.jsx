import { useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import * as API from '../servicios/servicios'
import { useEffect } from "react";
import { useRef } from "react";

export function EditarAbogado(){

    const refAbogadoNombre = useRef();
    const refAbogadoApellido = useRef();
    const refAbogadoEmail = useRef();
    const refAbogadoTel = useRef();
    const refAbogadoMP = useRef();

    const [datos_abogado, setDatosAbogados] = useState('');
    const {idabogados} = useParams();
    const [mensajeExito, setMensajeExito] = useState('')
    console.log('el parametro que me llega desde el Listado de Clientes es: ', idabogados)

    useEffect(() =>{
      API.getAbogadosById(idabogados).then(setDatosAbogados)
  }, [idabogados])

  const editar_abogado = ()=>{
    console.log('Llama a la funcion correctamente')
const textInput2 = refAbogadoNombre.current.value;
const textInput3 = refAbogadoApellido.current.value;
const textInput4 = refAbogadoEmail.current.value;
const textInput5 = refAbogadoTel.current.value;
const textInput6 = refAbogadoMP.current.value;

    console.log('lo que está en el text input es ', textInput2, textInput3, textInput4, textInput5, textInput6)
const enviarInputText = {
  nombre: textInput2,
  apellido: textInput3,
  matricula: textInput6,
  email: textInput4,
  telefono: textInput5

}
    
    console.log(enviarInputText)
    API.EditarAbogado(idabogados, enviarInputText);
    setMensajeExito('Se editó el buitre correctamente')
      setTimeout(()=>{
        setMensajeExito('');
        window.location.reload(true)
      }, 3000)


}



    return(
        <div className="carta">
        <div className="cartacabeza">
          <h1 className="titulito1">Edicion de Clientes: {datos_abogado.apellido + ' ' + datos_abogado.nombre}</h1>
        </div>
      
      
      <div className="cartacuerpo">

        {
          mensajeExito?
          <div className="alert alert-success" role="alert">{mensajeExito}</div>
          :''
        }
        
      <form onSubmit={editar_abogado}>

        <div className="form-group">
          <label for="">Nombre</label>
          <input required type="text" ref={refAbogadoNombre} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="textito"></small>
        </div>

        <div className="form-group">
          <label for="">Apellido</label>
          <input required type="text" ref={refAbogadoApellido} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="textito"></small>
        </div>

        <div className="form-group">
          <label for="">Matricula</label>
          <input required type="text" ref={refAbogadoMP} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="textito"></small>
        </div>

        <div className="form-group">
          <label for="">Correo Electronico</label>
          <input required type="text" ref={refAbogadoEmail} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="textito"></small>
        </div>
        
        <div className="form-group">
          <label for="">Telefono</label>
          <input required="required" type="text" ref={refAbogadoTel} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="textito"></small>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">Editar Cliente</button>
          <Link to={'/abogadosadmin'}><button type="button" className="btn btn-secondary">Volver al listado</button></Link>
        </div>

      </form>

      </div>

    <div className="card-footer text muted">
    </div>

</div>
    )
}