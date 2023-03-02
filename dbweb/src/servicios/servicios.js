const API_URL='http://localhost:3500';


//trae a los abogados de la base de datos por el metodo get
export async function getAbogados(){
    try{

        const response = await fetch(`${API_URL}/abogados`);
        const data = await response.json();
        return data;
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}


//trae a los clientes de la base de datos por el metodo get
export async function getClientes(){
    try{

        const response = await fetch(`${API_URL}/clientes`);
        const data = await response.json();
        return data;
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}

//ALTA y BAJA DE CLIENTES

export async function BajaCliente(id_clientes){
    const jsonTextInput = {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json'
       }
    };
    console.log('Guarda en servicios el id_cliente?',id_clientes)
    try{
    const response = await fetch(`${API_URL}/bajacliente/${id_clientes}`, jsonTextInput);
    const data = await response.json();
    console.log('datos del API en servicios', data)
    return data;
    } catch(error){
        console.log('no funciona la comunicacion con el backend')
    } 
   }

//conexion entre front y end de guardar datos de consulta

export function GuardarConsulta(datos){
 const jsonTextInput = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
 };
     fetch(`${API_URL}/insertarconsulta`, jsonTextInput)
}

// Login
export async function Login(datos){
    const jsonTextInput = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(datos)
    };
    try{
    const response = await fetch(`${API_URL}/login`, jsonTextInput);
    const data = await response.json();
    console.log('datos del API en servicios', data)
    return data;
    } catch(error){
        console.log('no funciona la comunicacion con el backend')
    } 
   }

//conexion entre front y end de guardar datos de cliente nuevo
   export function GuardarCliente(datos){
    const jsonTextInput = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(datos)
    };
        fetch(`${API_URL}/insertarclientes`, jsonTextInput)
   }

   //conexion entre front y end para insertar usuario nuevo
   export function GuardarUsuario(datos){
    const jsonTextInput = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(datos)
    };
        fetch(`${API_URL}/registro`, jsonTextInput)
   }

   //conexion entre front y end de guardar datos de un nuevo abogado
   export function GuardarAbogado(datos){
    const jsonTextInput = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(datos)
    };
        fetch(`${API_URL}/insertarabogados`, jsonTextInput)
   }

