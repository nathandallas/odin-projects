const myLibrary = [];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(title + " by " + author + ", " + pages + " pages, " + read);
  };
}
