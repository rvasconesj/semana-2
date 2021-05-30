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