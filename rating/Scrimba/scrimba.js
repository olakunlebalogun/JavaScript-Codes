"use strict";
const name = "olakunle";
const names = [
	"olakunle",
	"Macmillian",
	"Odegarrd",
	"Lewis Hamilton",
	"Rodriguez",
];

const mylist = document.querySelector("#list");

const renderedNames = names.map((name) => {
	return `<h1>${name}</h1>`;
});

mylist.innerHTML = renderedNames;

console.log(names.join(""));

console.log(renderedNames);
const mySimple = (numberOne, numberTwo = 10) => {
	const numberThree = numberOne * numberTwo; // check what happens if you do not a let,const
	console.log(numberThree);
	return numberThree;
};

mySimple(5);

const buttonOne = document.querySelector("#btn1");
const buttonTwo = document.querySelector("#btn2");

buttonOne.addEventListener("click", (e) => {
	console.log(e.target);
	e.target.style.backgroundColor = "red";
});

buttonTwo.addEventListener("click", (e) => {
	console.log(e.currentTarget);
	e.target.style.backgroundColor = "red";
});
