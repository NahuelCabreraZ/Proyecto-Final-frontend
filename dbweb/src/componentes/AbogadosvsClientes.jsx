import React, { useEffect } from "react"
import { useState } from "react"
import * as API from '../servicios/servicios'
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import './ListadoAbogadosAdmin.css'
export function AbogadosvsClientes(){

    const [vista, setVista] = useState([]);

    useEffect(() =>{
        API.getVista().then(setVista)
    }, [])
    console.log(vista.map)


    return (
        <>
        <div className="carta">
            <div className="cartacabeza">
                <h1 className="titulito1">Relaciones</h1>
            </div>
         <div className="table-responsive">

            <Table className="table">
            <thead>
                <tr>
                    <th>Abogados</th>
                    <th>Clientes</th>
                </tr>
            </thead>
            <tbody>
                {vista.map((vistas) => (
                    <tr>
                        <td>{vistas.ABOGADOS}</td>
                        <td>{vistas.CLIENTES}</td>
                    </tr>
                ))}

            </tbody>
            </Table>
            </div>
        </div>
        </>
    )

 }