console.log("jinx bitch");

const promise = new Promise((resolve, reject) => {
	reject("this ia an error");
});

console.log(promise);

// promise.then((res) => console.log(res)).catch((err) => console.log(err));
// promise.then((res) => console.log(res));
promise.catch((err) => console.log(err));

const names = ["John", "mark", "Bob", "Tim"];
const newNames = [...names, "Kunle", "matt"];
console.log(newNames);

const myTime = new Date().getTime().toString();
console.log(myTime);

console.log("jinx" && true && 0);
