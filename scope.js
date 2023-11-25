/** Scope **/

let nombre = 'Josimar' // Scope Global

const saludar = () => {

    let apellido = 'Leon'
    console.log(`nombre:${nombre} y apellido:${apellido}`) //Scope Block
}

//saludar()

//Scope Lexico o Herencia
const funcion1 = ()=>{
    let saludo1 = 'Hola desde funcion 1'

    const funcion2 = ()=>{
        console.log(saludo1);
    }
    return funcion2()

}

funcion1()

