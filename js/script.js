// definir una prinmise es js 
const valor = 
    new Promise((resolce, rejected) =>{


        //variable de control : centinela
        const s = 1
        if(s > 0){
            resolve(s)
        }else{
            rejected(s)
        }

});

//utilizar la promise
//then : en caso de ejecucion del resolve
// que se debe hacer 
//catch: en caso de ejecute el rejected
// que se debe hacer 
valor
    .then( dato  =>
        console.log(`dato valido : ${dato}`)
    ) 
    .catch(dato => 
        console.log(`dato valido : ${dato}`)
    )

console.log (valor)