const bookProtos = {
	getSummary: () => {
		return `${this.title} was written by ${this.author} in year ${this.year}`;
	},

	getAge: () => {
		const years = new Date().getFullYear() - this.year;
		return years;
	},
};

// Create object
// const book1 = Object.create(bookProtos);
// book1.title = "Book One";
// book1.author = "John Doe";
// book1.year = "2009";

const book1 = Object.create(bookProtos, {
	title: { value: "Book One" },
	author: { value: "John Doe" },
	year: { value: "2009" },
});
console.log(book1);
