'use strict'

var gBooks;
var gIdx = 0;

function createBooks() {
    var books = [];
    var booksNames = ['Harry Potter', 'cook', 'Tehilim', 'javascript for beginners'];
    for (let i = 0; i < booksNames.length; i++) {
        books.push(createBook(booksNames[i]));
    }
    return books;
}

function createBook(bookName, price = getRandomIntInclusive(50, 150)) {
    return {
        id: ++gIdx,
        bookName: bookName,
        price: price,
        rate: 0
    };
}

function deleteBook(bookId) {
    var bookIdx = gBooks.findIndex(function (book) {
        return +bookId === book.id;
    })
    gBooks.splice(bookIdx, 1);
}

function getBooks() {
    return gBooks;
}

function addBook(name, price) {
    var book = createBook(name, price);
    gBooks.push(book);
}

function updateBook(bookId, bookPrice) {
    var bookIdx = gBooks.findIndex(function (book) {
        return book.id === +bookId;
    })
    gBooks[bookIdx].price = bookPrice;
}

function getBookById(bookId) {
    return gBooks.find(function (book) {
        return book.id === bookId;
    })
}