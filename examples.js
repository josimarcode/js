/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.*/


const contarCadenas=(cadenas="")=> 
(!cadenas)
?console.warn("No ingresaste ninguna cadena")
:console.info(`La cadena "${cadenas}" tiene ${cadenas.length} caracteres`);

//contarCadenas("Hola Mundo jojo");

/*2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/

const textoCortado = (cadena="",longitud=undefined)=>
(!cadena)
?console.warn("No ingresaste ninguna cadena")
:console.info(`El texto recortado es ${cadena.slice(0,longitud)}`)

//textoCortado("Hola Mundo",4)
/*3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

const cadenaAArreglo = (cadena="",separador=undefined)=>
(!cadena)
?console.warn("No ingresaste ninguna cadena")
:(separador===undefined)
?console.warn("No ingresaste ningun separador")
: console.info(cadena.split(separador))

//cadenaAArreglo("enero,febrero,marzo", ",")
/*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/

const repetirTexto = (texto="",veces=undefined)=> {
    if(!texto) return console.warn("No ingresaste texto")
    if(veces===undefined) return console.warn("no ingresaste el numero de veces a repetir")
    if(veces===0) return console.error("no puedes repetir 0 veces")
    if( Math.sign(veces)=== -1) return console.error("no puedes repetir numeros negativos")
    for (let i = 1; i <= veces; i++) console.info(`${texto},${i}`)

}

//repetirTexto("Hola Mundo", 5)

/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const invertirCadena = (cadena="")=>
(!cadena)
?console.warn("No ingresaste ninguna cadena de texto")
:console.info(cadena.split("").reverse().join("")) 

invertirCadena("Hola Mundo")
/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/