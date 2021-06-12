// Ejercicio 0

let promise = new Promise(
    function(resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
    });
    promise.then(alert);  

//    Sale 1 en alerta, la segunda es ignorada.

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
//         }).then(function(result) {
//             return result *1;

//         }).then(function(result) {
//         return result *2;
//     });
//         promise.then(alert);  


// Ejercicio 1

function delay(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => alert('runs after 3 seconds'))

// ejercicio 2

