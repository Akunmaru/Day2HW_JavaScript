//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for (let i = 0; i < Object.values(person3).length; i++){
    console.log(Object.values(person3)[i])
}
for (let i = 0; i < Object.keys(person3).length; i++){
    console.log(Object.keys(person3)[i])
}
// var obj = JSON.parse(person3);
// function printValues(obj) {
//     for(var k in obj) {
//         if(obj[k] instanceof Object) {
//             printValues(obj[k]);
//         } else {
//             document.write(obj[k] + "<br>");
//         };
//     }
// };






/* //=======Exercise #2=========// */
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

/* // Create our Person Prototype */
function Person(age = 10){
    //printInfo method
    this.printInfo = (name = 'Drake') => {
        this.age = age
        console.log(`My name is ${name} and I am ${this.age} years old...`);
        return 'did the thingy'
    }
    //The addition method
    var dude = age
    this.increments = (name = 'Drakesss') => {
        dude++;
        // var added = toBeAdded + age
        // const adding = toBeAdded ++;
        console.log(`My name is ${name} and I am ${dude} years old...`);
        return 'Returned Value'
    }
}
//Create two new persons
let meme = new Person(10)
console.log(meme.printInfo("Chuck Norris"))
let nanny = new Person(65)
console.log(nanny.printInfo("Owen Wilson"))

//Calling the increment by one method
console.log(meme.increments("Chuck Norris"))
console.log(meme.increments("Chuck Norris"))
console.log(meme.increments("Chuck Norris"))





// =============Exercise #3 ============// */
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const biggieSmalls = (text) => {
    return new Promise( (resolve, reject) => {
        if ( text.length >= 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

biggieSmalls("1234567890")
//(resolve)
.then( (result) => {
    console.log("Big word")
})
//(reject)
.catch( (error) => {
    console.log("Small Number")
})


// UNCOMMENT ME TO CHECK IF I AM A PROMISE DATATYPE
// console.dir(biggieSmalls())