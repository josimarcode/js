/*
 * Crea una función que encuentre todas las combinaciones de los números
 * de una lista que suman el valor objetivo.
 * - La función recibirá una lista de números enteros positivos
 *   y un valor objetivo.
 * - Para obtener las combinaciones sólo se puede usar
 *   una vez cada elemento de la lista (pero pueden existir
 *   elementos repetidos en ella).
 * - Ejemplo: Lista = [1, 5, 3, 2],  Objetivo = 6
 *   Soluciones: [1, 5] y [1, 3, 2] (ambas combinaciones suman 6)
 *   (Si no existen combinaciones, retornar una lista vacía)
 */

function convertToBinary(num) {
    let binary = []
    while (num!==0){
        let remainder = parseInt(num%2)
        num = Math.floor(num/2);
        binary.push(remainder);
    }
    return binary;
}

const getSumsArray=(array, target )=>{
    let sumsArray = [];
    const combinations = Math.pow(2,array.length);
    //console.log(combinations);
    for (var i = 1; i < combinations; i++) {
        let positions = convertToBinary(i);
        //console.log(positions);
        positions = positions.map((pos,index)=>pos!==0? index:null)
        positions = positions.filter(pos=>pos !== null)
        let currentSum = 0;
        let curreSumArray= [];
        positions.forEach(pos=>{
            currentSum += array[pos];
            curreSumArray.push(array[pos]);
        })
        if(currentSum===target){
            sumsArray.push(curreSumArray)
        }
    }
    return sumsArray
}

let res = getSumsArray([1, 5, 3, 2,1],7);
//console.log(res);

/*
 * Crea una función que encuentre todos los triples pitagóricos
 * (ternas) menores o iguales a un número dado.
 * - Debes buscar información sobre qué es un triple pitagórico.
 * - La función únicamente recibe el número máximo que puede
 *   aparecer en el triple.
 * - Ejemplo: Los triples menores o iguales a 10 están
 *   formados por (3, 4, 5) y (6, 8, 10).
 */

// Creamos dos punteros, uno para el primer elemento y otro para el segundo.
// Dada la fórmula de Pitágoras, a^2 + b^2 = c^2, de modo que c será igual a
// sqrt(a^2 + b^2). Para todos los números que encontremos que cumplan esta ecuación,
// comprobaremos si son enteros, menores o iguales al máximo dado y si i y j son iguales.
// Tras descartar todos los casos que no sirven, los agregamos al array que devolvemos.

function findPythagoreanTriples(max) {
    const triples = [];
    for (let i = 1; i <= max; i++) {
      for (let j = i + 1; j <= max; j++) {
        const maxCandidate = Math.sqrt(Math.pow(i, 2) + Math.pow(j, 2));
        if (Number.isInteger(maxCandidate) && maxCandidate <= max && i !== j) {
          triples.push([i, j, maxCandidate]);
        }
      }
    }
  
    return triples;
  }
  
  console.log(findPythagoreanTriples(5));
  console.log(findPythagoreanTriples(10));
  console.log(findPythagoreanTriples(15));
  console.log(findPythagoreanTriples(20));