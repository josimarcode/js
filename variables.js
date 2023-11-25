 /**
 * * Declaracion de variables = datos primitivos tipos string, boolean, number y symbol
 * TODO: var, let y const
 * TODO: Las variables undefined existen pero no tienen valor y null al inicializar una variable nula.
 * * scope : Se puede declarar e inicializar mas de una variable en un mismo dato.
 * * NaN : 
 * * let : Es un tipo de dato con mayor cobertura (Se recomienda su uso)
 * ? las variables de tipo const pueden cambiar de valor = las constante no cambian
 */
var firstName = "Henry";

let lastName ="Novoa";
const nickName = "Cachorro";
let age = 30;
let boolean = true;
let date;
let model = null;
let number1, number2, number3;
number1 = 2;
number2 = 3;
number3 = 5;
let nombre = "h";
function escribirNombreCompleto(){
    let nombreCompleto = "Mi nombre es "+firstName+" "+lastName+" "+"y mi edad es "+age+" anos";
    console.log(nombreCompleto);
   
}
escribirNombreCompleto();



/**
 * * CONST
 */
function exerciseOne() {
    //nickName = "gato";
    console.log(nickName);
}
exerciseOne();

/**
 * * UNDEFINED
 */
function exerciseTwo() {
    console.log(date);
}
exerciseTwo();

/**
 * * NULL
 */
 function exerciseThree() {
    console.log(model);
}
exerciseThree();

/**
 * * NaN
 */
 function exerciseFour() {
    console.log(age*lastName);
}
exerciseFour();

/**
 * * PROMPT
 */

 function exerciseFive() {
    let play = prompt('Hola eres gamer?');
    alert('Si yo Juego '+ play);
}
exerciseFive();

