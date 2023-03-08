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

//trae a los abogados por su ID

export async function getAbogadosById(id_abogados){
    try{

        const response = await fetch(`${API_URL}/abogados/${id_abogados}`);
        const data = await response.json();
        console.log('ServiciosJS',data)
        return data[0];
    
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

//trae a los clientes por ID de la base de datos por el metodo get

export async function getClientesById(id_clientes){
    try{

        const response = await fetch(`${API_URL}/clientes/${id_clientes}`);
        const data = await response.json();
        console.log('ServiciosJS',data)
        return data[0];
    
    }catch(error){
        console.log('Nuestro error es ', error);
    }
}

//Edita a los clientes por ID

export function EditarCliente(idclientes, datos){
    const jsonTextInput = {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(datos)
    };
        fetch(`${API_URL}/clientes/${idclientes}`, jsonTextInput)
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

   export async function AltaCliente(id_clientes){
    const jsonTextInput = {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json'
       }
    };
    console.log('Guarda en servicios el id_cliente?',id_clientes)
    try{
    const response = await fetch(`${API_URL}/altacliente/${id_clientes}`, jsonTextInput);
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

   //variante mejorada

   export function GuardarClienteSsj(datos){
    const jsonTextInput = {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(datos)
    };
        fetch(`${API_URL}/insertclients`, jsonTextInput)
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

   //ELIMINAR A UN ABOGADO DE LA BASE DE DATOS
   export async function EliminarAbogado(idabogados){
    const token = JSON.parse(localStorage.getItem('token'))
    const jsonTextInput = {
       method: 'DELETE',
       headers: {
           'Content-Type': 'application/json',
           Authorization : `Bearer ${token}`,
       }
    };
    console.log('Guarda en servicios el idabogados?',idabogados)
    try{
    const response = await fetch(`${API_URL}/abogados/${idabogados}`, jsonTextInput);
    const data = await response.json();
    console.log('datos del API en servicios', data)
    return data;
    } catch(error){
        console.log('no funciona la comunicacion con el backend')
    } 
   }