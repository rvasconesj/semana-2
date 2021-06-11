// ejercicio 0

function unique(arr) {
    return Array.from(new Set(arr));
  }

let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

//alert( unique(values) ); // Hare, Krishna, :-O



//ejercicio 2

let map = new Map();
map.set("name", "John")

let keys = Array.from(map.keys()); // se tranforma en array para que pueda retornar

keys.push("more");   // no es 'functionkeys.push
console.log(keys)


// ejercicio 3

//let i = 3;
//while (i) { alert( i-- );}

//Cuál es el último valor alertado por este código? ¿Por qué?
// El último valor es 1. Porque while convierte en booleano los valores, por lo tanto, en el conteo
// de números, '0' es false y la cadena termina.


// Ejercicio 4

// La forma de prefijo ++ i:
//let i = 0;while (++i < 5) alert( i ); //muestra los valores del 1 a 4 sin contar 0 porque ++i salta un valor que es 0.
// La forma sufijo i ++
//let i = 0;while (i++ < 5) alert( i ); //cuenta los 5 valores, desde el 0. se cumple que desde el 0 al 4 son menores a 5

// Ejercicio 5

// const ask = (question, yes, no) => {    // convertido en '=>', las condicionales quedan dentro del {}
//    if (confirm(question)) yes();
//    else no();
// };
  
//  ask(
//    "Do you agree?",
//    () => alert("You agreed."),               // con arrow ya no necesita {}
//    () => alert("You canceled the execution.")
//  );

  // ejercicio 8

  let list = {
    value: 1,
    next: {
    value: 2,
    next: {
    value: 3,
    next: {
    value: 4,
    next: null
    }
    }
    }
    };

// recursiva

// function printList(list) {

//    console.log(list.value);  // muestra el elemento actual
  
//    if (list.next) { 
//      printList(list.next);  // haz lo mismo con el resto de la lista 
//    }
  
//  }
  
//  printList(list);

// loop

// function printList(list) {
    
//    while (list) {
//      console.log(list.value);
//      list = list.next;
//    }
  
//  }

//  printList(list);

  // ejercicio  6

// counter () debe devolver el siguiente número (como antes).
// counter.set (value) debe establecer el contador en valor.
// counter.decrease () debería disminuir el contador en 1.


function makeCounter() {
     let count = 10;
     function counter() {
       return counter.count--;
     };
     counter.count = 10;       
     counter.set = value => count = value;
     counter.countDown = () => count--;
   
     return counter;
   };

   let counter = makeCounter();
   console.log(counter() ); 
   console.log(counter() ); 
   console.log(counter() );
  


  
  




  // ejercicio 7

//  let number;

// do {
//    number = prompt("Ingresa un valor mayor a 100", 0);
// } while (number <= 100 && number);

//alert(number);

// ejercicio 1

// function aclean(arr) {
  
//    for (let anagram of arr) {
//     let sorted = anagram.toLowerCase().split("").sort().join(""); 
//      map.set(sorted, anagram);
//    }
  
//    return Array.from(map.values());
//  }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert( aclean(arr) ); 