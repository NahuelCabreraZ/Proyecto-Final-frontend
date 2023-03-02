import React, { useEffect } from "react"
import { useState } from "react"
import * as API from '../servicios/servicios'

export function ListadoClientes(){

    const [clientes, setClientes] = useState([]);
    const [MensajeError, setMensajeError] = useState('');

    useEffect(() =>{
        API.getClientes().then(setClientes)
    }, [])


        // FUNCION BAJA DE CLIENTE//
    const bajaCliente = async(id)=>{
        console.log("el id que vamos a dar de baja es el...",id)

        const user = await API.BajaCliente(id)
        console.log('guarda el id en user?', user)
        
        if(user.status){

            setMensajeError(user.mensaje)
            setTimeout(()=>{
                setMensajeError('')
                window.location.reload(true);
            }, 4000)

        }else{
            setMensajeError(user.mensaje)
            setTimeout(()=>{
                setMensajeError('')
            }, 4000)
        }
    }
        ///////////////////////////

        // FUNCION ALTA DE CLIENTE//

        ///////////////////////////

    return (
       <div className="card">
        <div className="card-header">
            Lista de Clientes Activos
        </div>
                {
                    MensajeError?
                    <div className="alert alert-succes" role="alert">
                     {MensajeError}
                    </div>
                    :('')

                }
       <div className="card-body"> 
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Dni</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Domicilio</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {clientes.map((cliente) => (

                    <tr key={cliente.idclientes}>

                        <td scope="row">{cliente.idclientes}</td>
                        <td>{cliente.dni}</td>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.apellido}</td>
                        <td>{cliente.email}</td>
                        <td>{cliente.telefono}</td>
                        <td>{cliente.domicilio}</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="">
                               <button onClick={() => bajaCliente(cliente.idclientes)} type="button" className="btn btn-danger">Dar de Baja</button>
                            </div>
                        </td>
                    </tr>
                ))}
                <div className="card-footer text-muted" > Agregar Cliente
                    <ul><a name="" id="" class="btn btn-primary" href="/crearClientes" role="button">+</a></ul>
                </div>
            </tbody>
        </table>
        </div>
        </div>
    )

}