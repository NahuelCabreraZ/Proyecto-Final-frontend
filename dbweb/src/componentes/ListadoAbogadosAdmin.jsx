import React, { useEffect } from "react"
import { useState } from "react"
import * as API from '../servicios/servicios'
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ListadoAbogadosAdmin.css'
export function ListadoAbogadosAdmin(){

    const [abogados, setAbogados] = useState([]);
    const [MensajeError, setMensajeError] = useState('');

    useEffect(() =>{
        API.getAbogados().then(setAbogados)
    }, [])

    const eliminar_abogado = async(id)=>{
        console.log("el id que vamos a eliminar de baja es el...",id)

        const user = await API.EliminarAbogado(id)
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
                window.location.reload(true);
            }, 3000)
        }
    }

    return (
        <>
        <div className="carta">
            <div className="cartacabeza">
                <h1 className="titulito1">Lista de Abogados</h1>
                {
                    MensajeError?
                    <div className="alert alert-success" role="alert">
                     {MensajeError}
                    </div>
                    :('')

                }
            </div>
         <div className="table-responsive">

            <Table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>email</th>
                    <th>Telefono</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {abogados.map((abogado) => (
                    <tr key={abogado.idabogados}>
                        <td>{abogado.nombre}</td>
                        <td>{abogado.apellido}</td>
                        <td>{abogado.email}</td>
                        <td>{abogado.telefono}</td>
                        <td>
                            <button onClick={() => eliminar_abogado(abogado.idabogados)} className="btn btn-danger" type="button" role="button">ELIMINAR</button>
                        </td>
                    </tr>
                ))}
            
                <div className="button-container" >
                    <ul><Link name="" id="" class="btn btn-primary" to="/registroUsuario" role="button">Agregar Login para Abogados</Link></ul>
                    <ul><Link name="" id="" class="btn btn-primary" to="/agregarabogado" role="button">Agregar Abogado</Link></ul>
                </div>

            </tbody>
            </Table>
            </div>
        </div>
        </>
    )

}