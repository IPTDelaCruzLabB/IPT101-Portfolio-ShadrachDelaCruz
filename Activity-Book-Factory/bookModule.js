const book1 = {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupery",
    year: 1943,

    getBookLabel: function() {
        return `${this.title} by ${this.author}`;
    }
};

const book2 = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997,

    getBookLabel: function() {
        return `${this.title} by ${this.author}`;
    }
};

const book3 = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,

    getBookLabel: function() {
        return `${this.title} by ${this.author}`;
    }
};

// Function
function formatBook(book, status) {
    return `Book: ${book.title} | Author: ${book.author} | Year: ${book.year} | Status: ${status}`;
}

// Export books and function
export { book1, book2, book3, formatBook };