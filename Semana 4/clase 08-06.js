async function requestHttp () {
    let request = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done"), 1000);
    });

    let result = await request;

    console.log(result);
}

requestHttp();

async function showAvatar() {
    // read github user
    let githubResponse = await fetch('https://api.github.com/users/sotopro');
    let githubUser = await githubResponse.json();

    // show the avatar

    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = 'promise-avatar-example';
    document.body.append(img);

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    img.remove();
    console.log(githubUser)
    return githubUser;
}

showAvatar();


let myPromise = new Promise((resolve, reject) => {
    let data;
    setTimeout(() => {
        data = 'Some payload';
        error = 'There was an error'
        if (data) {
            resolve(data);
        } else {
            reject(error);
        }
    })
});

// myPromise.then(data => {
//     if(data.error) {
//         console.log(data.error);
//     }
//     console.log(`Received: ${data}`);
// }).catch((err) => {
//     console.log(err);
// })

// myPromise.then(data => {
//     console.log(`Received: ${data}`);
//     let moreData = "Another payload"
//     return moreData
// }).then(data => {
//     console.log(data)
// }).catch(() => {
//     console.log('There was an error')
// })


let isMomHappy = true;

// Promise
// Part 1:
const willGetNewPhone = new Promise((resolve, reject) => {
    if(isMomHappy) {
        let phone = {
            brand: 'iPhone 12',
            color: 'red'
        };
        resolve(phone); // fulfilled
    } else {
        let reason = new Error('mom is not happy!');
        reject(reason) // reject
    }
});

// Part 2

// var askMon = () => {
//     willGetNewPhone.then((fulfilled) => {
//         // yay, you got a new phone
//         console.log(fulfilled);
//     }).catch((error) => {
//         console.log(error.message)
//     })
// }

// askMon();

const showOff = async (phone) => {
    return new Promise((resolve, reject) => {
        let message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;
        resolve(message)
    })
    // console.log('phone')
    // let message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone`;
    // return Promise.resolve(message);
};

const askMon = async () => {
    try {
        let phone = await willGetNewPhone;
        let message = await showOff(phone);
        console.log(message);
        console.log('after asking mom')
    } catch (error) {
        console.log(error.message); 
    }
    // willGetNewPhone
    // .then(showOff)
    // .then(fulfilled => {
    //     // yay, you got a new phone'
    //     console.log(fulfilled)
    // })
    // .catch(error => {
    //     // ops, mom don't buy it'
    //     console.log(error.message);
    // });
}

// askMon();
(async () => {
    await askMon();
})();


// const add = (num1, num2) => {
//     return num1 + num2
// }

// const result = add(1,2);

// const addAsync = async (num1, num2, callback) => {
//     fetch('http://www.example.com', {
//         method: 'POST',
//         // GET POST PUT DELETE, etc
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: {
//             num1: num1,
//             num2: num2
//         }
//     });
//     return callback;
// }

// addAsync(1,2, success => {
//     const result = success; // you get result = 3 here
// })


let resultA, resultB, resultC;

// const add = (num1, num2) => {
//     return num1 + num2
// }
// const numbers = {
//     num1: 1,
//     num2: 2
// }
// resultA = add(numbers.num1, numbers.num2); // 3
// resultB = add(resultA, 3) // 6
// resultC = add(resultB, 4); // 10

// console.log(`total = ${resultC}`);

// console.log(resultA, resultB, resultC)

// const addAsync = (num1, num2) => {
//     // use ES6 Fetch API which a promise
//     // what is .json()? developer mozilla
//     return fetch(`http://www.example.com?num1=${num1}&num2=${num2}`)
//         .then(result => result.json());
// }

// addAsync(1,2)
//     .then(success => {
//         resultA = success;
//         return resultA
//     })
//     .then(success => {
//         addAsync(success, 3)
//     })
//     .then(success => {
//         resultB = success
//         return resultB;
//     })
//     .then(success => {
//         addAsync(success, 4)
//     })
//     .then(success => {
//         resultC = success
//         return resultC
//     })
//     .then(success => {
//         console.log(`total: ${success}`);
//         console.log(resultA, resultB, resultC)
//     })
//     .catch(err => {
//         console.log('Something went wrong!', err)
//     })

// function first () {
//     console.log(1);
// }
// function second (callback) {
//     setTimeout(() => {
//         console.log(2);
//         // execute the callback function
//         callback();
//     }, 0);
// }
// function third () {
//     console.log(3);
// }

// first();
// second(third);
// function fn () {
//     console.log('just a function')
// }

// function higherOrderFunction (callback) {
//     callback();
// }

// higherOrderFunction(fn)

// function pymaridOfDoom () {
//     setTimeout(() => {
//         console.log(1)
//         setTimeout(() => {
//             console.log(2)
//             setTimeout(() => {
//                 console.log(3)
//             }, 500)
//         }, 2000)
//     }, 1000)
// }

// pymaridOfDoom();

// function asynchronousRequest(args, callback) {
//     if(!args) {
//         return callback(new Error('Whoa! Something went wrong!'))
//     } else {
//         return setTimeout(() => {
//             callback(null, {body: `${args} ${Math.random() * 10}`})
//         }, 500)
//     }
// }

// function callbackHell () {
//     asynchronousRequest('First', function first(error, response) {
//         if(error) {
//             console.log(error)
//             return
//         }
//         console.log(response.body);
//         asynchronousRequest('Second', function second(error, response) {
//             if(error) {
//                 console.log(error)
//                 return
//             }
//             console.log(response.body); 
//             asynchronousRequest(null, function third(error, response) {
//                 if(error) {
//                     console.log(error)
//                     return
//                 }
//                 console.log(response.body)
//             })
//         })
//     })
// }

// callbackHell();

// .then()
// .catch()
// .finally()

fetch('https://api.github.com/users/sotopro')
    .then((response) => {
        console.log('response', response)
        return response.json();
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })


    async function requestHttp () {
        let request = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done"), 1000);
        });
    
        let result = await request;
    
        console.log(result);
    }
    
    // requestHttp();
    
    async function showAvatar() {
        // read github user
        let githubResponse = await fetch('https://api.github.com/users/sotopro');
        let githubUser = await githubResponse.json();
    
        // show the avatar
    
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = 'promise-avatar-example';
        document.body.append(img);
    
        // await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    
        // img.remove();
        console.log(githubUser)
        return githubUser;
    }
    
    // showAvatar();
    
    class Thenable {
        constructor(num) {
            this.num = num
        }
        then(resolve, reject) {
            console.log(resolve);
            // resolve with this.num*2 after 1500ms
            setTimeout(() => resolve(this.num * 2) , 1500)
        }
    }
    
    async function response() {
        // waits for 1.5 seconds, then result becomes
        let result = await new Thenable(1);
        console.log(result)
    }
    
    // response();
    
    class Waiter {
        async wait() {
            return await Promise.resolve(1)
        }
    }
    
    new Waiter()
        .wait()
        .then((response) => console.log(response));
    
    // async function errorMessage() {
    //     await Promise.reject(new Error("Whooops!"))
    // }
    
    
    async function errorMessage() {
        try {
            let products = await fetch('https://no-such-url');
            // let response = await fetch('https://no-such-url/order', {
            //     method: 'POST',
            //     body: products
            // });
    
            // let resuts = await Promise.all([
            //     products,
            //     response
            // ])
    
            return products;
        } catch(err) {
            console.log('error fetch', err)
        }
    }
    
    // errorMessage();
    
    const who = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('🐶')
            }, 200)
        })
    }
    
    const what = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('walks in')
            }, 300)
        })
    }
    
    const where = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('🏞')
            })
        })
    }
    
    const message = async () => {
        // const a = await who();
        // const b = await what();
        // const c = await where();
    
        const [a,b,c] = await Promise.all([who(), what(), where()]);
    
        console.log(`${a} ${b} ${c}`)
    }
    
    message();


    