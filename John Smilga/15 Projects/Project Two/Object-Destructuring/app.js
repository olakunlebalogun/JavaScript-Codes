console.log("Fucking people!");

const bob = {
	first: "bob",
	last: "sanders",
	city: "chicago",
	siblings: {
		sister: "jane",
	},
};
/**
 * NOTE: Unlike Array-destructuring, the destructuring variable
 *       must be the same as the object property name, unless   you give it an alias,
 *       else you will have undefined.
 *      like the example above.
 */

// Direct
const { first, last } = bob;
console.log(first, last); // bob sanders

//Using Alias
const { city: c, first: f } = bob;
console.log(c, f); // chicago bob

//Accessing sub-object

const {
	first,
	siblings: { sister },
} = bob;
console.log(first, sister); // bob jane

// Accessing sub-object with alias

const {
	last,
	siblings: { sister: s },
} = bob;
console.log(last, s); // sanders jane

// USEFUL IN REACT

// without destructuring

function printPerson(person) {
	console.log(person.first);
}

printPerson(bob); // bob

// with destructuring

function printPerson(person) {
	const { first, last } = person;
	console.log(first, last);
}

printPerson(bob); // bob sanders

// with destructuring REFACTORED

function printPerson({ first, last, city, siblings: { sister } }) {
	console.log(first, last, sister);
}

printPerson(bob); // bob sanders jane
