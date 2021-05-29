let { name1, email2 } = { name1: "John", email2: "john@example.com" }
console.log(name1); // "John" console.log(email) // "john@example.com"
console.log(email2);

//let { name, email, rest} = user;
//const user = { 


const user = {
    name: "John", 
    email: "john@example.com", 
    city: "Phoenix", 
    state: "AZ",
    country: "USA"
};
console.log(user);

//rest === { city: "Phoenix", state: "AZ", country: "USA"} // true


    //const user = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
    //const str = `({ name, email, rest} = user ).toString()`

//    console.log({ name, email, rest});