// Number interface class in JS interface
// Array.
// ArrayBuffer
// Date
// Map
// Set

// Function
// FormData

// ------------------------- Date -------------------------------------------

console.log(Date.now());
console.log(Date.UTC(52, 1, 24, 19, 30, 53, 998));
console.log(Date.parse("11-1-2022"));

// ------------------ Set -------------------------------------------------
const here = Array.from("olakunle");
console.log(new Set(here));

// ------------------------ Map -------------------------------------------

const details = [
	{
		name: "Olakunle",
		age: 12,
		country: "nigeria",
		tribe: "maesk",
	},
	{
		name: "jeremiah",
		age: 52,
		country: "togo",
		tribe: "maersk",
	},
];
console.log(new Map(details));
