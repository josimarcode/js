/**
 * * Operacion suma, resta, multiplicacion, division
 */

var a = 0;
var b = 0;
let calculo = "suma";
function operation(a, b, calculo) {
  switch (calculo) {
    case "suma":
      return console.log(a + b);
    case "resta":
      return console.log(a - b);
    case "multi":
      return console.log(a * b);
    case "divi":
      return console.log(a / b);
    default:
      return console.error(`la ${calculo} no existe`);
  }
}

//operation(20, 5, "residuo");

/**
 * * Almacenar un arreglo
 */

function arrayStorage(a, b) {
  let array = [];
  for (let i = a; i <= b; i++) {
    console.log(i);
    if (i % 2 === 0) array.push(i);
  }
  console.log(array);
}

//arrayStorage(2, 200);

/**
 * * Tabla de multiplicacion
 */

function tabla(a, x = 12) {
  for (i = 0; i <= x; i++) {
    if (i !== 5) console.log(`${a} X ${i} = ${a * i}`);
  }
}

//tabla(1,20);

/**
 * * Tabla de multiplicacion
 */

function filter() {
  let array = [];
  for (let i = 1; i <= 100; i++) {
    array.push(i);
  }
  console.log(array);
  array.filter((elem) => {
    if (elem % 3 === 0) console.log(elem);
  });
}

//filter();
/**
 * * Math
 */

function MathRandom() {
    let num = Math.floor(Math.random() * (1000-1)+1)
    console.log(num);

    let mitad = num / 2;
    let doble = num * 2;
    let raiz = Math.sqrt(num);

    console.log(`la mitad ${num} es la mitad ${mitad} el doble  ${doble} y la raiz cuadrada ${raiz}`)
    
}

//MathRandom();

//filter();
/**
 * * Date
 */

function date() {
    let cumple = new Date("21 12 2022");
    let hoy = new Date();

    let diasRestante = Math.floor((cumple.getTime()- hoy.getTime())/(1000*60*60*24));
    console.log(`Tu cumple es ${cumple} y  faltan ${diasRestante} dias`)

}

//date()

/**
 * * Text
 */

 function text() {
    let array = []
   let texto = "Hola Gente.  Mi  nombre es Josimar y soy de peruano"
    console.log(texto.split(" "))

    array.push(texto.split(" "))
    console.log(array)
}

//text()

/**
 * * Filter de Object
 */

 function filter() {
    const personas = [
        {
            nombre: "Luis",
            apellido: "Leon",
            edad: 20
        },
        {
            nombre: "Luis",
            apellido: "Castro",
            edad: 10
        },
        {
            nombre: "Humberto",
            apellido: "Leon",
            edad: 28
        },
        {
            nombre: "Daniel",
            apellido: "Leon",
            edad: 3
        },
        {
            nombre: "Henry",
            apellido: "Leon",
            edad: 56
        }

    ]
     console.log(personas);
     personas.filter((elem)=> {
        if(elem.nombre === "Luis") console.log(`${elem.nombre} ${elem.apellido}`)
     })

     personas.some((elem)=> {
        return elem.edad>18
     })
     
}
//filter()

/**
 * * Extras Array
 */

 function extras() {
    let array = [1,2,3,4,5,6]
    let array2 = ['','','']
    let array3 = ['OK','FAIL','OK']
    let array4 = [1,2,3,3,3,2,2,4,5,6]

    let mult = array.map(n => n*2);
    let filte = array.filter(n => n !== 2)
    let find = array.find(n => n === 2)
    let findIndex = array.findIndex(n => n === 2)
    let fill = array2.fill('casa')
    let ever = array3.every(n => n == 'Ok')
    let som = array3.some(n => n == 'FAIL')

    let sinduplicados = [...new Set(array4)]

    console.log(mult)
    console.log(filte)
    console.log(find)
    console.log(findIndex)
    console.log(fill)
    console.log(ever)
    console.log(som)
    console.log(sinduplicados)
   
}
//extras();

/**
 * * No Usar Switch
 */

const adversario = 'Hulk'

const LOKI_DISFRACES = {
    Iron: 'Magneto',
    Thor: 'Odin',
    Hulk: 'Thanos'
}

const LOKI_DEFAULT_DISFRACES = 'Loki'

//const loki = LOKI_DISFRACES[adversario] || LOKI_DEFAULT_DISFRACES

const loki = LOKI_DISFRACES[adversario] ? LOKI_DISFRACES[adversario] : LOKI_DEFAULT_DISFRACES

console.log(loki);