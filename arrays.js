/**
 * *    Arrays
 */
let frutas = ['banana','fruta','pera'];
document.write(frutas[0]);

/**
 * *    Arrays asociativos
 */

let pc ={
    nombre:'JOTA',
    procesador: 'M1',
    ram: '16GB',
    espacio: '526gb'
};

let nombre = pc['nombre'];
let procesador = pc['procesador'];
let ram = pc['ram'];
let espacio = pc['espacio'];

frase =`el nombre de mi pc es ${nombre} <br>
        el procesador es: ${procesador} <br>
        la memoria ram es: ${ram} <br>
        el espacio de disco es: ${espacio}
 `;

 document.write(frase);