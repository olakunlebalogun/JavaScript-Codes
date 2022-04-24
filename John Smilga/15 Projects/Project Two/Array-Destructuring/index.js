// ARRAY DESTRUCTURING

const friends = ["john", "peter", "fred", "kunle", "cole"];

const [x, y, z] = friends;
console.log(x, y, z); // john peter friends

const [x, , z] = friends;
console.log(x, z); // john fred

const [, a, , b] = friends;
console.log(a, b); // peter kunle

const [a, b] = friends;
console.log(b, a); // peter john

const [, , , y, x] = friends;

console.log(x, y); // cole kunle

let first = "bob";
let second = "john";

[second, first] = [first, second];

console.log(first, second); // john bob
