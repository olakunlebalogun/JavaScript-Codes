const firstname = "olakunle";
const lastname = "balo";
const fullName = `${firstname} ${lastname}`;
console.log(fullName);


// Destructuring in ES6
const info = {
    first : "Mike",
    last : "Murray",
    state : "Texas",
    job : "developer",
    age : 33
}

const{first, last} = info;
console.log(`${first} ${last}`);

        // same goes for array
let[x,y,z] = ["kampala", "brussels", "rome","berlin"]
console.log(`${x} ${y} ${z}`);


// Object Literals

function addressMaker (city, state){
    let newAddress = {city, state};
    console.log(newAddress);
}

addressMaker("Texas", "Chicago");

// Spread Operator => this is used to copy and objec without copying the address
const numbers = [1,2,3,4,5,6,7,];
const number2 = [...number];
number2.push(33);
console.log(number2);

// const keyword in JS, you can modify an array and objects but you cannot change the data type