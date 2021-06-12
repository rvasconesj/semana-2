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

promise.then(f1).catch(f2);  // 1) catch es el que jala la siguiente opción en caso la primera sea false
Versus:
promise.then(f1, f2)         // 2) .then no tiene a donde derivar la siguiente opción.

// Son códigos diferentes. 

// ejercicio 3

function loadJson(url) {
    return fetch(url).then(response => {
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error(response.status);
    }
  });
}
  loadJson('no-such-user.json').catch(alert); // Error: 404
  
  //convert to async await
async function loadJson('example.json') {
    let jsonUrl = await fetch(url);
    let url = await jsonUrl.json();

    await new Promise((resolve, reject) => 
    setTimeout(resolve, 200));


    
}
