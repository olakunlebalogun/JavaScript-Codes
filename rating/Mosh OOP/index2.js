const names = ["Ola", "kunle", "fash"];
const newNames = names.map((name) => {
	const splitName = name.split("");
	return splitName;
});

console.log(newNames.flat());

const myName = "Olakunle";
const age = 30;
const isBig = null;
const message = [];

console.log(myName && age && message && isBig);

const temperature = "";

console.log(parseFloat(temperature));
