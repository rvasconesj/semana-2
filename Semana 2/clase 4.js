// condicional '==' igual a
// != no es igual (not equal to) ejem  5 != 4 true  siempre retorna un booleano
// === estrictamente igual tomando el tipo de dato. 5 number === '5' string false / 5 number === 5 number true
// !== estrictamente no es igual que el tipo de conversión
// > mayor que
// >= mayor igual que
// < menor que
// <= menor igual que

// Equality / igualdad

let x = 3

x == 3
console.log('x == 3', x == 3);
console.log('x == 5', x == 5);

let shark = 'sam';

console.log("shark == 'sam", shark == 'sam');

//let answer = 10;
//no
//let reponse = prompt("What is 5 + 5");

//if(answer === response){
    //alert("You are correct!")
  //  } else {
  //      alert("You are wrong!")
 //   }

 // Inequality

let y = 8;

 console.log('y!=9', y != 9);

 //Identity

 let z = 4;

 console.log('z === 4', z === 4)
 console.log('z === 4', z === '4'); //string

 // non identity

 let a = 18;
 
 console.log('a !== 18', a !== 18); //Number
 console.log('a !== 18', a !== '18'); //string

 console.log('a !== 29', a !== 29);

 let f = 72;

 console.log('f > 80', f > 80)
 console.log('f > 80', f > '30')

 let g = 200;

 console.log('g >= 90', g >= 90);
 console.log('g >=199', g >= 300)

//// logical operators

// AND &&  validación como 'y'

const highQuality = true;
const lowPrice = false;

console.log(highQuality && lowPrice);

// OR ||   validación como 'o'

console.log(highQuality || lowPrice)

// NOT !

console.log(!highQuality);