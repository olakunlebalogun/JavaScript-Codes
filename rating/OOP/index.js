const book1 = {
	title: "Book One",
	author: "John Doe",
	year: "1994",

	getSummary: () => {
		`${this.title} was written by ${this.author} in year ${this.year}`;
	},
};

const book2 = {
	title: "Book Two",
	author: "James Doe",
	year: "1904",

	getSummary: () => {
		return this.author;
		// return `${this.title} was written by ${this.author} in year ${this.year}`;
	},
};

console.log(book2.getSummary); // Notice what this gives
console.log(book1.author);
console.log(book2.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));
