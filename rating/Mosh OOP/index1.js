// console.log("This is JS");

// Creating Objects

// Creating Objects using functions

function Circle(radius) {
	return {
		radius,
		draw: function () {
			console.log("Draw a circle");
		},
	};
}

// To call the above function, use
const firstCircle = Circle(10);
console.log(firstCircle);

function Circle1(radius) {
	this.radius = radius;
	this.draw = function () {
		console.log("Draw a circle");
	};
}

class Circle2 {
	constructor(radius) {
		this.radius = radius;
		this.draw = function () {
			console.log("Draw a circle");
		};
	}
}

const secondCircle = new Circle2(5);
console.log(secondCircle);

const newName = new String("Nathaniel");
console.log(newName);

const myAge = new Number(50);
console.log(myAge);

const anotherCircle = new Function(
	"radius",
	`
    this.radius = radius;
    this.draw = function () {
        console.log("This is another Circle")
    }
`
);

// This another way to call this function here

// const thirdCircle = Circle2.call({}, 15);
// console.log(thirdCircle);

console.log(Circle2.call({}, 15));
