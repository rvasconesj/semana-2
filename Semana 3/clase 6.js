//Declaración / Inicialización greeting function 

function greet() {
    console.log('Hello World!');
}

greet(); // <--de esta manera realizamos el retorno de la función greet

////

function greet(name) {
    console.log(`Hello ${name}`);
}

greet(`Daniel`); 
greet(`Sarang`);
greet(`Cinthia`);

//function add(x,y) {       // no permite su uso a otras funciones que no tengan la palabra reservada
//    return x + y          // retorno de valor directo
//}

// const sum = add(9,5)  // <--  expresiones


//  name función     función a usar 'add' (está dentro de una variable) es importante que tenga un nombre o será anónima
//const sum = function add(x,y) {
//    return x + y;
//}

//console.log(`sum`, sum(20,5));   //<-- con esto vemos el retorno en la consola local

// arrow function o funciones flecha

const sum = (x,y) => {
    return x + undefined;
}

console.log('sum', sum(20,5));


const multiply = (x,y) => {     // '=>' = function
    return x* y;
}
console.log('multiply', multiply(2,2));

const square = (x) => {
//    if(!x) trow new Error('Parametro requerido')
    if(typeof x === 'number' && x) {
        return x * x;         
    } else if(typeof x !== 'number') {
      return 'Parametro es un número';
    } else {
        return 'Parametro es requerido'
    }
}

console.log(`square`, square(2));

 const printNumber = {
    phrase: 'The current number value is:',
    numbers: [1,2,3,4],
    loop: () => {
//        // bind /encadenar/ the `this` from printNumber to the forEach function
//        this.numbers.forEach(
//            function (number) {
//                console.log(this.phrase, number)
//            }.bind(this),
//        )
        this.numbers.forEach((number) => {   //resumen de lo comentado
            console.log(this.phrase, number);
        })
        }
    }

 printNumber.loop();

// function myFunction () {
//     this.peer = 5;    // 'peer' es el valor
//    }
//    const instance = new myFunction;
//    console.log(instance.peer)

    // console.log(myFunction.prototype)


    // los parentesis se usan con conjuntos o arreglos

    // var tiene funtion scope: uso de la variable de forma global, se puede redeclarar su valor y asignarle un nuevo valor en el mismo código.
    // joysting : se accede al último valor de la variable 

    //let: no se puede redeclarar.

    // const: no se puede redeclarar, ni reasignar valor.

    //global: fuera del bloque del cógido
    //local: dentro de un bloque de código

    