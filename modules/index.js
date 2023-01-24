import Book from './booklist.js';
import printDate from './datetime.js';

const newBook = new Book();
newBook.buttonAdd.addEventListener('click', () => {
  const title = newBook.bookTitle.value;
  const author = newBook.bookAuthor.value;
  newBook.addBook(title, author);
  newBook.bookTitle.value = '';
  newBook.bookAuthor.value = '';
});
window.addEventListener('load', () => {
  printDate();
});
