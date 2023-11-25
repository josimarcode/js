/**
 * *    Funciones
 */
function saludar() {
    return 'todo oka';
}

let saludo = saludar();

document.write(saludo+'<br>');

/**
 * * funciones - parametros
 */

function suma(num1,num2) {
    let res = num1+num2;
    document.write(res+'<br>');
}

suma(12,34);
suma(62,34);

/**
 * * funciones - flecha
 */
const saludare = function(nombre) {
    let frase = `!Hola ${nombre} como estas?`;
    document.write(frase+'<br>');
}
saludare("josimar");

const saludare2 = (nombre) =>{
    let frase = `!Hola ${nombre} como estas bro?`;
    document.write(frase+'<br>');
}
saludare2("josimar");

const saludare3 = nombre => document.write('hola ' + nombre)
saludare3("pedro");



