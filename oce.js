// Object Constructor Exercise
// TOP Full Stack JavaScript

//  Write a constructor for making “Book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book. Output "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        console.log(title + ' by ' + author + ', ' + pages + ' pages, ' + read)
    }
}

const book1 = new Book('The Hobbit','J.R.R. Tolkein', '295', 'not read yet')

book1.info()

console.log(Object.getPrototypeOf(book1) === Book.prototype)