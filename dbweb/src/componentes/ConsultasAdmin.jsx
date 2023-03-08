import React, { useEffect } from "react"
import { useState } from "react"
import * as API from '../servicios/servicios'
import Table from "react-bootstrap/Table";
import { Modal } from "react-bootstrap";
import { Button } from "bootstrap";


export function ListaConsultas(){

    const [consultas, setConsultas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState('');

    useEffect(() =>{
        API.getConsultas().then(setConsultas)
    }, [])

    //marca leido a la consulta

    const marcarLeido = async(id)=>{

        const check = await API.marcaLeido(id)
        console.log('guarda el id en check?', check)
        window.location.reload(true)
    }

    // marca NO leido a la consulta

    const marcarNoLeido = async(id)=>{

        const nocheck = await API.marcaNoLeido(id)
        console.log('guarda el id en user?', nocheck)
        window.location.reload(true)
    }

    //abre el texto de la consulta aparte
    const handleShowModal = (text) => {
        setModalText(text);
        setShowModal(true);
      };
    
      const handleCloseModal = () => setShowModal(false);


    return (
        <>
       <div className="card">
        <div className="card-header">Consultas</div>
       <div className="table-responsive"> 
        <Table className="table">
            <thead>
                <tr>
                    <th>DNI</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Domicilio</th>
                    <th>Telefono</th>
                    <th>Texto</th>
                    <th>¿Leido?</th>
                </tr>
            </thead>
            <tbody>
                {consultas.map((consulta) => (
                    <tr key={consulta.idconsultas}>
                        <td>{consulta.dni}</td>
                        <td>{consulta.nombre}</td>
                        <td>{consulta.apellido}</td>
                        <td>{consulta.domicilio}</td>
                        <td>{consulta.telefono}</td>
                        <td>
                        <button className="btn btn-primary" onClick={() => handleShowModal(consulta.texto)}>Ver texto</button>
                        </td>
                        <td>{consulta.leido}</td>
                        <td>
                        
                        { (consulta.leido==="no")?
                        <div className="btn-group" role="group" aria-label="">
                        <button onClick={() => marcarLeido(consulta.idconsultas)} type="button" className="btn btn-success">marcar como leído</button>
                        </div>
                        :
                        <div className="btn-group" role="group" aria-label="">
                        <button onClick={() => marcarNoLeido(consulta.idconsultas)} type="button" className="btn btn-success">marcar como no leido</button>
                        </div>
                        }
                        
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
        </div>
        </div>
                <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                        <Modal.Title>Texto completo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <textarea className="textarea" value={modalText} readOnly  style={{ height: '200px', width: '100%', resize: 'vertical' }} />
                        </Modal.Body>
                        <Modal.Footer>
                        <button className="btn btn-primary" variant="secondary" onClick={handleCloseModal}>
                            Cerrar
                        </button>
                        </Modal.Footer>
            </Modal>
        </>
    );

}