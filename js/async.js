//importar la funcion mostrarEnHTML
import { mostrarEnHTML } from "./mostrarEnHTML.js";


//funcion de obtener datos
//utilizando async - awalt
const obtenerEmpleados = async() => {

    const url = "data/empleados.json"
    const response = await fetch (url);
    const empleados = await response.json();
    //invocar la funcion mostrarEnHTML
    mostrarEnHTML(empleados);


}


const btnCargarJSON = 
        document.querySelector('#cargarJSON');
//añadir evento click al boton
btnCargarJSON.addEventListener('click' ,
            obtenerEmpleados)