// while - tiene que ser true

//const popLimit = 10;

//let fish = 0;    // si el número de peces sobrepasa el limite de espacio ya no se ehecuta

//while (condition) {
    //excuse code
//}

//while (fish < popLimit) {
//    fish++;
//    console.log(`There's room for' ${(popLimit - fish)} more fish`);
//}

const iceCapsAreMelting = true;

let polarBears = 5;

while (iceCapsAreMelting) {
    console.log(`There are ${polarBears} polar bears.`);
    polarBears--;
    if(polarBears === 0) {
        console.log(`There are no polar bears left.`)
        break;  //fija un límite
    }
}

// do while    - es más usado con los loops

let x = 0;

do {
    x++;
    console.log('x++', x)
   } while (false); // para que no se vuelva a ejecutar

   let i = 0;           // se aplica hasta que se cumple la iteracción
   do {
       console.log( i );
       i++;
       } while(i < 6); 

// for  - tiene un inicio, condición y pasos

for (let i = 0; i < 6; i++) {
    // loop body 
    console.log(i)
}   //se ejecuta de 0 hasta 5.

for (let i = 0; i < 10; i++) {
    console.log('1 % 2', 1 % 2 )
    //if(i % 2 == 0) continue;
    //console.log(i)
    
    //if(i > 5) {               - no es recomendable
    //    console.log(i)
    //} else {
    //    continue;
    //}

    // if(i > 5) ? console.log(i) : continue; - no está permitido
}

// loop 

// for (let i = 0; i < 3; i++) {
//    for (let j = 0; j < 3; j++) {
//        let input = prompt(`value at coords (${i}, ${j})`, '')
//        // what is we want to wxit from here to Done (below)?
//        coords.push(input);
//    }
// }
//
// alert('Done!');
// document.write(coords)


// agregar el nuevo ejemplo


/// actualizar array con una variable que se quiera cumplir

let data = [];

for (let i = 0; i < 6; i++) {
    data.push(i);
    console.log(data)
}

let fish = ['salmon', 'eel', 'pike'];

for (let i = 0; i < fish.length; i++) {
    console.log(fish[1])
}

const shark = {
    species: 'great white', 
    color: 'white',
    numberOfTeeth: Infinity
}

for (attribute in shark) {
   // console.log('attribute', attribute)
   // console.log(shark[attribute])   //con . en vez de [] no retorna nada porque es indefinido
  let nameUppercase = `${attribute}`.toUpperCase();

  console.log(`${nameUppercase} : ${shark[attribute]}`.toUpperCase())  //se puede consolear de esta forma.
}

// for 

const sharks = ['great white', 'tiger', 'hammerhead'];

for (let shark of sharks) { 
    console.log(shark)
}

for (let [index, shark] of sharks.entries()) {
    console.log(index, shark)   // permite obtener la posición y el contenido. 
    
}
// resultado: 
// 0 great white
// 1 tiger
// 2 hammerhead

let sharkString = 'sharks'; 

for (let shark of sharkString) {
    console.log(shark)
}