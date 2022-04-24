console.log("Hello");

/**
 *
 * ""
 * 0
 *
 * false
 * undefined
 * null
 *
 */

// console.log(true || null || undefined || "saddle");

console.log((true && 5) || "saddle");

const boys = ["olakunle", "saddle", "ade"];
const girls = ["anna", "Nancy", "Rebecca"];
const friend = ["Mike", "Rotimi"];
const allFriends = [...boys, ...girls, ...friend];
console.log(allFriends);

const myFriends = [boys, girls, friend];
console.log(myFriends.flat());
