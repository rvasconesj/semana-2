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