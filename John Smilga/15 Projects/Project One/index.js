// document.querySelectorAll(".btn").forEach((i) => {
//         i.addEventListener("click",()=>{
//             alert("This is a good code!");
//         })
//     })


    // These are ways to write to console in JavaScript
    // document.write('Hello world'); // This can't write objects
    // alert("Hello world!");
    // console.log('Hello world!'); // This is the best way to write to console

// const firstName = "Olakunle";
// const lastName = "Balogun";
// console.log(`${firstName} ${lastName}`);

// // FUNCTIONS
// // Function Declaration

// function addNumber (number1, number2){
//     const add = number1 + number2;
//     return add;
// }
//     // To call this function
// const answer = addNumber(43, 78);

// // Function Expression
// const result = function (number1, number2){
//     return number1 + number2;
// }
//     // To call this Function Expression
// const myResult =   result(5,4); 

// // To view on console
// const col = [answer, myResult];
// console.log(col);

// let varies = ["ola", "smith", "john", " mike"];
// varies.pop();
// varies.pop();
// varies.pop();


// // ADVANCE ARRAY METHODS

// const people = [
//     { name: "bob", age:20, position:"developer"},
//     { name: "peter", age:25, position:"designer"},
//     { name: "susy", age:30, position:"the boss"}
// ]

// people.forEach( (i) => {
//     console.log(i.age);
// })

// const age = people.map( (person) =>{
//     return person.age;
// })

// console.log(age);

// const names = people.map( (person) =>{
//     return `<h1>${person.name}</h1>`;
// })
// document.body.innerHTML = names.join("");


// const men = people.filter( (person) =>{
//    return person.age > 20;
// })

// console.log(men);


let result = document.createElement('h1');
let txt = document.createTextNode('Na wa o');
result.appendChild(txt);
document.body.appendChild(result);


// function first (number1, number2) {
//     return number1*number2;
// }
// function second (cb) {
//     cb();
   
// }

//  console.log(5,8);

function tryMe(param1, param2) {
  console.log(param1 + " and " + param2);
}

function callbackTester(callback) {
  callback(arguments[1], arguments[2]);
}

callbackTester(tryMe, "hello", "goodbye");


function first(param1, param2) {
  console.log(param1 * param2);
  return param1 * param2;
}

function second(param3, callback) {
  callback(arguments[1], arguments[2]);
  console.log(param3 + callback(arguments[1], arguments[2])); 
  return param3 + callback(arguments[1], arguments[2]);
}

second( 40,first, 5, 8);

