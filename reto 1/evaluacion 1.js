// ejercicio 1

//var name = 'Rodrigo';
//let admin = name;

//console.log(name)

          //  //alert(admin);
//alert(`Hello ${admin}`);

// ejercicio 2

var planet = 'Tierra';
var visitWebsite = 'visit' 

// ejercicio 3

//const birthday = '18.04.1982';
//const age = someCode(birthday);

//¿Sería correcto usar mayúsculas para birthday? para age? ¿O incluso para ambos?
// Se puede utilizar, sim embargo, se recomienda usar en minúscula con la primera letra del segundo término en mayúscula
// para que sea más entendible.

// ejercicio 4

let name = "Ilya";
//alert( `hello ${1}` ); // carga el alert con el  'hello 1'
//alert( `hello ${"name"}` ); //  el alert con ' hello name'
//alert( `hello ${name}` ); // se genera el alert en el navegador hello 'Ilya'

// ejercicio 5

//const user = {
//    surName: 'John',
//    lastName: 'Smith'
//}

//console.log(user)

//const originalString = 'John'  
//console.log('newString', originalString.replace('John', 'Pete'))

let user = {};

user.name = 'John';
user.lastname = 'Smith';

user.name = 'Pete';

delete user.lastname;

console.log('user', user);

// const user2 = {
//     lastName: 'Smith'
// }

// console.log(user2)


// ejercicio 6

//let schedule = {};

//function isEmpty(schedule) {
//    return Object.keys(schedule).length === 0;
//};

//alert( isEmpty(schedule) ); // true

    //schedule["8:30"] = "get up";
//alert( isEmpty(schedule) ); // false

// ejercicio 7

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    };

let fullSalaries = 0;
    for (let sum of Object.values(salaries)) {
        fullSalaries += sum;
    }

    alert(fullSalaries)

// ejercicio 8

let menu = {
    width: 200,
    height: 300,
    title: "My Menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if(typeof obj[key] === 'number') {
         obj[key] *= 2;
        }
    }
    return obj;
}

console.log(menu);
console.log(multiplyNumeric(menu));