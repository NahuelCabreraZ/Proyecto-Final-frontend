import React, { useEffect } from "react"
import { useState } from "react"
import * as API from '../servicios/servicios'

export function ListadoAbogadosAdmin(){

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
                        </td>
                    </tr>
                ))}
            
                <div className="card-footer text-muted" >
                    <ul><a name="" id="" class="btn btn-primary" href="/registroUsuario" role="button">Agregar Login para Abogados</a></ul>
                    <ul><a name="" id="" class="btn btn-primary" href="/agregarabogado" role="button">Agregar Abogado</a></ul>
                </div>

            </tbody>
        </table>
        </div>
        </div>
        </>
    )

}