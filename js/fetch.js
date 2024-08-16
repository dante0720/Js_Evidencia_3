//api fetch :
//establecer conexion a  archivos o
//url externas al proyecto:
//(otros sitema)
//funcion para tratar el objeto json(empleado)
const mostrarEmpleado = ( {nombre, empresa } )=>{
    //
    const contenido = document.querySelector('#contenido')
    //poner contenido html en selector
    contenido.innerHTML = `
    <h2>Empleado del archivo </h2>
    <P>${ nombre }</P>
    <P>${ empresa }</P>`
    /*console.log(nombre)
    console.log(empresa)*/
}



const obtenerDatos = ()=>{

    //definir la ruta al archivo de lectura
    const archivo = "data/empleado.json"

    //conectarme al archivo
    fetch(archivo)
        .then(respuesta =>
            respuesta.json())
        .then (dato=> console.log(dato))
        .catch(error=> console.log(error))
}





obtenerDatos()
