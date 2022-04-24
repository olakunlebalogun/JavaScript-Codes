function Book(title, author, year) {
	console.log("starting...");
	this.title = title;
	this.author = author;
	this.year = year;

	this.getSummary = () => {
		return `${this.title} was written by ${this.author} in year ${this.year}`;
	};
}

const bk1 = new Book("Book one", "Pink Brown", "2015");
const bk2 = new Book("Book two", "Les James", "2016");
console.log(bk2.getSummary());
