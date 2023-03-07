import { useState } from "react"
import * as API from '../servicios/servicios'
import { Form, Button } from 'react-bootstrap';
import './LoginForm.css';
export function Login(){

const [user, setUser] = useState('');
const [password, setPassword] = useState('');
const [sesion, setSesion] = useState('');
const [MensajeError, setMensajeError] = useState('');

const send_form = async(event)=>{

    event.preventDefault();
    const usuario = await API.Login({user, password})
    console.log(usuario)
    
    if(usuario.status){
        console.log('se logeo correctamente')
        window.localStorage.setItem('saveUsuario', JSON.stringify(usuario));
        window.localStorage.setItem('token', JSON.stringify(usuario.token));
        setSesion(sesion)
        setUser('')
        setPassword('')
        window.location.reload(true);
    }else{
        setMensajeError(usuario.mensaje)
        setTimeout(()=>{
            setMensajeError('')
        }, 4000)
    }
}

    return(
        <>
                {
                    MensajeError?
                    <div class="alert alert-warning" role="alert">
                     {MensajeError}
                    </div>
                    :('')

                }
                <div className="login-page">
                    <div className="login-form-container">
                        <h1>Bienvenido!</h1>
                        <Form onSubmit={send_form}>
                            <Form.Group controlId="formBasicEmail" className="form-group-small">
                                <Form.Label className="my-label">Nombre de Usuario</Form.Label>
                                <Form.Control type="text" placeholder="" value={user} onChange={(event) => setUser(event.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="form-group-small">
                                <Form.Label className="my-label">Password</Form.Label>
                                <Form.Control type="password" placeholder="" value={password} onChange={(event) => setPassword(event.target.value)} />
                            </Form.Group>
                            <Form.Group className="form-group-center">
                            <Button variant="primary" type="submit">
                                Iniciar Sesion
                            </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>

      </>
    )
}