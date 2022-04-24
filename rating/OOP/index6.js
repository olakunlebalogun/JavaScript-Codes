class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}

	getSummary() {
		return `${this.title} was written by ${this.author} in year ${this.year}`;
	}

	getAge() {
		const years = new Date().getFullYear() - this.year;
		return years;
	}

	revise(newYear) {
		this.year = newYear;
		this.revised = true;
	}

	static bookStores() {
		return "Barnes and Noble";
	}
}

const book1 = new Book("Mastery", "Robert Greene", "2008");
console.log(book1.getSummary());
console.log(book1);
book1.revise("2019");
console.log(book1);

console.log(Book.bookStores());
