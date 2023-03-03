import { useState } from "react"
import * as API from '../servicios/servicios'
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
        window.localStorage.setItem('saveUsuario', JSON.stringify(usuario))
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
        <div className="card">

            <div className="container">
                <form onSubmit={send_form}>
                <h1 className="h3 mb-3 fw-normal">Iniciar Sesión</h1>
                {
                    MensajeError?
                    <div class="alert alert-warning" role="alert">
                     {MensajeError}
                    </div>
                    :('')

                }
                <div className="form-floating">
                <input required type="text" className="form-control" id="floatingInput" placeholder="name@example.com" value={user} onChange={(event)=>setUser(event.target.value)}/>
                <label for="floatingInput">Usuario</label>
                </div>
                <div className="form-floating">
                <input required type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
                <label for="floatingPassword">Contraseña</label>
                </div>
            
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                    Iniciar Sesión
                </button>
            </form>
            </div>
            
      </div>
      </>
    )
}