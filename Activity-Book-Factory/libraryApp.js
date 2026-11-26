import { book1, book2, book3, formatBook } from "./bookModule.js";

console.log("===== BOOK RECORD FACTORY =====");

console.log("\nBook 1:");
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
console.log(book1.getBookLabel());
console.log(formatBook(book1, "Available"));

console.log("\nBook 2:");
console.log(book2.title);
console.log(book2.author);
console.log(book2.year);
console.log(book2.getBookLabel());
console.log(formatBook(book2, "Borrowed"));

console.log("\nBook 3:");
console.log(book3.title);
console.log(book3.author);
console.log(book3.year);
console.log(book3.getBookLabel());
console.log(formatBook(book3, "Available"));
