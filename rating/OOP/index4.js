function Book(title, author, year) {
	console.log("starting...");
	this.title = title;
	this.author = author;
	this.year = year;

	// this.getSummary = () => {
	// 	return `${this.title} was written by ${this.author} in year ${this.year}`;
	// };
}

Book.prototype.getSummary = () => {
	return `${this.title} was written by ${this.author} in year ${this.year}`;
};

function Magazine(title, author, year, month) {
	Book.call(this, title, author, year);

	this.month = month;
}

// Inheriting the method from the parent class

Magazine.prototype = Object.create(Book.prototype);

// Creating the Constructor as that of Magazine and
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine("Time Magazine", "Joshua Claire", "2018", "March");

console.log(mag1.getSummary());

console.log(mag1);
