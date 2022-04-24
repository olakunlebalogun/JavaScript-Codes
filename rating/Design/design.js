console.log("HEllo world");
const name = "balloon";
const time = 34;
const isChristmas = true;

console.log(time || isChristmas);
// !(!bCondition1 && !bCondition2);

console.log(!(!time && !isChristmas)); // still haven't gotten this

// [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0],

const sample = [3, 4, 1, 34, 41, 0, 6]; // [2,2,1,2,2,0,0]
let out = [];
for (let i = 0; i < sample.length - 1; i++) {}
