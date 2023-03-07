import { useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import * as API from '../servicios/servicios'
import { useEffect } from "react";
import { useRef } from "react";

export function EditarCliente(){

    const refClienteDNI = useRef();
    const refClienteNombre = useRef();
    const refClienteApellido = useRef();
    const refClienteEmail = useRef();
    const refClienteTel = useRef();
    const refClienteDom = useRef();

    const [datos_clientes, setDatosClientes] = useState('');
    const {idclientes} = useParams();
    const [mensajeExito, setMensajeExito] = useState('')
    console.log('el parametro que me llega desde el Listado de Clientes es: ', idclientes)

    useEffect(() =>{
      API.getClientesById(idclientes).then(setDatosClientes)
  }, [idclientes])

  const editar_cliente = ()=>{
    console.log('Llama a la funcion correctamente')
const textInput = refClienteDNI.current.value;
const textInput2 = refClienteNombre.current.value;
const textInput3 = refClienteApellido.current.value;
const textInput4 = refClienteEmail.current.value;
const textInput5 = refClienteTel.current.value;
const textInput6 = refClienteDom.current.value;

    console.log('lo que está en el text input es ', textInput, textInput2, textInput3, textInput4, textInput5, textInput6)
const enviarInputText = {
  dni: textInput,
  nombre: textInput2,
  apellido: textInput3,
  email: textInput4,
  telefono: textInput5,
  domicilio: textInput6
}
    
    console.log(enviarInputText)
    API.EditarCliente(idclientes, enviarInputText);
    setMensajeExito('Se editó el cliente correctamente')
      setTimeout(()=>{
        setMensajeExito('');
        window.location.reload(true)
      }, 3000)


}



    return(
        <div className="card">
        <div className="card-header">Edicion de Clientes || Nombre del Cliente: {datos_clientes.apellido + ' ' + datos_clientes.nombre}</div>
      
      
      <div className="card-body">

        {
          mensajeExito?
          <div className="alert alert-success" role="alert">{mensajeExito}</div>
          :''
        }
        
      <form onSubmit={editar_cliente}>

        <div className="form-group">
          <label for="">Numero de Documento</label>
          <input required type="text" ref={refClienteDNI} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Sin puntos, solo numeros</small>
        </div>

        <div className="form-group">
          <label for="">Nombre</label>
          <input required type="text" ref={refClienteNombre} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label for="">Apellido</label>
          <input required type="text" ref={refClienteApellido} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label for="">Correo Electronico</label>
          <input required type="text" ref={refClienteEmail} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label for="">Telefono</label>
          <input required type="text" ref={refClienteTel} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted"></small>
        </div>
        
        <div className="form-group">
          <label for="">Domicilio</label>
          <input required="required" type="text" ref={refClienteDom} name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-primary">Editar Cliente</button>
          <Link to={'/listarClientes'}><button type="button" className="btn btn-secondary">Volver al Inicio</button></Link>
        </div>

      </form>



      </div>




    <div className="card-footer text muted">
    </div>

</div>
    )
}