// Ejercicio 0

// let promise = new Promise(
//     function(resolve, reject) {
//     resolve(1);
//     setTimeout(() => resolve(2), 1000);
//     });
//     promise.then(alert);  

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

// function delay(ms) { 
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// delay(3000).then(() => alert('runs after 3 seconds'))

// // ejercicio 2

// promise.then(f1).catch(f2);  // 1) catch es el que jala la siguiente opción en caso la primera sea false
// Versus:
// promise.then(f1, f2)         // 2) .then no tiene a donde derivar la siguiente opción.

// Son códigos diferentes. 

// ejercicio 3

// function loadJson(url) {
//     return fetch(url).then(response => {
//     if (response.status == 200) {
//         return response.json();
//     } else {
//         throw new Error(response.status);
//     }
//   });
// }
//   loadJson('no-such-user.json').catch(alert); // Error: 404
  
  //convert to async await
// async function loadJson() {
//     let jsonUrlResponse = await fetch(example.json);
//     let userJson = await jsonUrlResponse.json();

//     await new Promise((resolve, reject) => {
//     if (response.status == 200) {
//         return response.json();
//     } else {
//         throw new Error(response.status);
//     }
//   });

//   loadJson('no-such-user.json').console.log(alert); // Error: 404
  
//     console.log(userJson)
//     return userJson;
// };

// ejercicio 4

class HttpError extends Error {
    constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
    }
}
   async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        return response.json(); 
    } else {
        throw new HttpError(response); 
    }
    }
    
    
    // Ask for a user name until github returns a valid user
    
    async function demoGithubUser() { 
        let user;
        while(true) {
    let name = prompt("Enter a name?", "iliakan"); 
    try {
        user = await loadJson(`https://api.github.com/users/${name}`) 
   break;
} catch(err) { 
    if (err instanceof HttpError && err.response.status == 404) { 
        alert("No such user, please reenter."); 
} else { 
    throw err; 
} 
}};
}

alert(demoGithubUser());

// ejercicio 5

// async function wait() {
//     await new Promise(resolve => setTimeout(resolve, 1000));
  
//     return 10;
//   }
  
//   function f() {
//       wait().then(result => 
//         console.log(result)
//     );
//   }
// f()
 
// ejercicio 6

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//     reject (new Error("Whoops!"));
//     }, 1000);
//     }).catch(alert);

    // No carga porque se tenía que aplicar la función reject en vez de rethrow y terminar el llamado con ()

 // ejercicio 7
 
//  function printNumbers (from, to) {
//      let counter = from;

//      let timer = setInterval(function() {
//          console.log(counter);
//          if (counter == to) {
//             clearInterval(timer);
//          } 
//          counter++;
//      }, 1000);
//  }
//  printNumbers(1, 5);

 