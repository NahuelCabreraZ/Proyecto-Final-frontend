import React, { useEffect } from "react"
import { useState } from "react"
import * as API from '../servicios/servicios'
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ListadoAbogadosAdmin.css'
export function ListadoAbogadosAdmin(){

    const [abogados, setAbogados] = useState([]);

    useEffect(() =>{
        API.getAbogados().then(setAbogados)
    }, [])

    return (
        <>
         <div className="table-responsive">
            <Table className="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>email</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
                {abogados.map((abogado) => (
                    <tr>
                        <td>{abogado.nombre}</td>
                        <td>{abogado.apellido}</td>
                        <td>{abogado.email}</td>
                        <td>{abogado.telefono}</td>
                        <td>
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
        </>
    )

}