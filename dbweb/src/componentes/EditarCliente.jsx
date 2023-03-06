import { useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

export function EditarCliente(){
    const [datos_clientes, setDatosClientes] = useState('');
    const {idclientes} = useParams();
    console.log('el parametro que me llega desde el Listado de Clientes es: ', idclientes)



    return(
        <div className="card">
        <div className="card-header">Edicion de Clientes</div>
      
      
      <div className="card-body">
      
      <div>

        <div className="form-group">
          <label for="">Numero de Documento</label>
          <input type="text"  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted">Sin puntos, solo numeros</small>
        </div>

        <div className="form-group">
          <label for="">Nombre</label>
          <input type="text"  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label for="">Apellido</label>
          <input type="text"  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label for="">Correo Electronico</label>
          <input type="text"  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <label for="">Telefono</label>
          <input type="text"  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted"></small>
        </div>
        
        <div className="form-group">
          <label for="">Domicilio</label>
          <input type="text"  name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
          <small id="helpId" className="text-muted"></small>
        </div>

        <div className="form-group">
          <button type="button" className="btn btn-primary">Guardar Consulta</button>
          <Link to={'/listarClientes'}><button type="button" className="btn btn-secondary">Volver al Inicio</button></Link>
        </div>

      </div>



      </div>




    <div className="card-footer text muted">
    </div>

</div>
    )
}