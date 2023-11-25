/**
 * *    Bucles - While
 */

let numero = 0;

while(numero < 6){
    numero ++;
    document.write(numero);

}

/**
 * *    bucles - Do While
 */

let numero1 = 0;

do{
    
    document.write(numero1 + '<br>');
    numero1 ++;
}
while(numero1 < 6)

/**
 * *    Break
 */

while(numero < 1000){
    numero ++;
    document.write(numero);

    if(numero==10){
        break;
    }
    document.write('fin');
}
/**
 * *    Bucles - For
 */

let i = 20;

for(let i = 6; i>=0; i--){
  document.write(i+'<br>')
}

for(let i = 0; i<20; i++){
    if(i==12){
        continue;
    }
    document.write(i+'<br>')
  }
document.write(i);

/**
 * *    Bucles - For in Of
 */

let animales =['gato','perro','luna']

for(animal in animales){
    document.write(animal+'<br>')

}

for(animal of animales){
    document.write(animal+'<br>')

}
