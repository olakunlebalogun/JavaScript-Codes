class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary() {
		return `${this.title} was written by ${this.author} in year ${this.year}`;
	}
}

class Magazine extends Book {
	constructor(title, author, year, month) {
		super(author, title, year);
		this.month = month;
	}
}

const mag1 = new Magazine("Alaroye", "Adekola Iyanda", "1994", "september");

console.log(mag1.getSummary());
