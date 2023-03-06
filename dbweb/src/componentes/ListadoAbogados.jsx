import React, { useEffect } from "react"
import { useState } from "react"
import * as API from '../servicios/servicios'
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";


export function ListadoAbogados(){

    const [abogados, setAbogados] = useState([]);

    useEffect(() =>{
        API.getAbogados().then(setAbogados)
    }, [])

    return (
        <>
       <div className="card">
        <div className="card-header">Lista de Abogados disponibles</div>
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
                    <tr>
                        <td>{abogado.nombre}</td>
                        <td>{abogado.apellido}</td>
                        <td>{abogado.email}</td>
                        <td>{abogado.telefono}</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="">
                                <Link name="" id="" className="btn btn-secondary" to="/contacto" role="button">CONTACTAR</Link>
                            </div>
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
        </div>
        </div>
        </>
    );

}