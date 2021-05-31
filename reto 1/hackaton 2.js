// Ejercicio 0

//let john = { name: "John", surname: "Smith", id: 1 };
//let pete = { name: "Pete", surname: "Hunt", id: 2 };
//let mary = { name: "Mary", surname: "Key", id: 3 };
//let users = [ john, pete, mary ];

//let usersMapped = users.map(user => ({
//    fullName: `${user.name} ${user.surname}`,
//    id: user.id
//  }));

// /*usersMapped = [
// { fullName: "John Smith", id: 1 },
// { fullName: "Pete Hunt", id: 2 },
// { fullName: "Mary Key", id: 3 }
// ]
// */ alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith


// Ejercicio 1

let fruits = ["Apples", "Pear", "Orange"];// insertar un nuevo valor en la "copia"
fruits.push("Pineaple");
console.log(fruits);

let shoppingCart = fruits;shoppingCart.push("Banana");// ¿Qué hay en las frutas?
for (let key in fruits)
console.log( fruits [key]);

//alert( fruits.length ); // Indica la cantidad de valores de frutas.

// Ejercicio 2 

let styles = ["Jazz", "Blues"]
styles.push("Rock-n-Roll");
console.log(styles);

styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles);

styles.shift() ;
console.log(styles);

styles.splice(0, 0, "Rap", "Reggae");
console.log(styles);

// Ejercicio 3

// function sumInput() {

//    let numbers = [];
    
//    while (true) {
//       let ask = prompt("Por favor indica un número", 0);
//
//       if (ask === "" || ask === null || !isFinite(ask)) break;
//    
//       numbers.push(+ask);
//    }
//                     
//    let sum = 0;
//    for (let number of numbers) {
//        sum += number;
//   }
//    document.write(sum); // :v
//    return sum;
 //   
// }
//    alert( sumInput() );

    // ejercicio 4
    
 //   function filterRange(arr, a, b) {
        
 //       return arr.filter(item => (a <= item && item <= b));
 //                                   }                       
    //   let arr = [5, 3, 8, 1];
    //   alert( arr ); // 5,3,8,1 (not modified)
       
     //  let filtered = filterRange(arr, 1, 4);
     //  alert( filtered ); // 3,1 (matching values)

// ejercicio 5 

// function copySorted(arr) {
//    return arr.slice().sort();   
//  }
  
//  let arr = ["HTML", "JavaScript", "CSS"];
  
//  let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript

// alert( arr ); // HTML, JavaScript, CSS (no changes)

// Ejercicio 6




// Ejercicio 8

let mensaje = (login == 'Empleado' ) 
        ? 'Hola' : (login == 'Director' ) 
        ? 'Saludos' : (login == '' ) 
        ? 'No login' : '';

       if (login == 'Empleado' ) {
mensaje = 'Hola';
} else if (login == 'Director' ) {
mensaje = 'Saludos';
} else if (login == '') {
mensaje = 'Sin inicio de sesión';
} else {
mensaje = '';
};

