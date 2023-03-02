import React, { useEffect } from "react"
import { useState } from "react"
import * as API from '../servicios/servicios'
import { NavBar } from "./NavBar";


export function ListadoAbogados(){

    const [abogados, setAbogados] = useState([]);

    useEffect(() =>{
        API.getAbogados().then(setAbogados)
    }, [])

    return (
        <>
       <div className="card">
        <div className="card-header">Lista de Abogados disponibles</div>
       <div className="card-body"> 
        <table className="table">
            <thead>
                <tr>
                    <th >Id</th>
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
                        <td scope="row">{abogado.idabogados}</td>
                        <td>{abogado.nombre}</td>
                        <td>{abogado.apellido}</td>
                        <td>{abogado.email}</td>
                        <td>{abogado.telefono}</td>
                        <td>
                            <div className="btn-group" role="group" aria-label="">
                                <a name="" id="" className="btn btn-secondary" href="/contacto" role="button">CONTACTAR</a>
                            </div>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
        </div>
        </div>
        </>
    )

}