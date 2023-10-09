const addBooks = document.querySelector(".add-books");
const books = JSON.parse(localStorage.getItem("books")) || [];
const booksList = document.querySelector(".book-container");

function addBook(e) {
  e.preventDefault();
  const title = this.querySelector("[name=title]").value;
  const author = this.querySelector("[name=author]").value;
  const pages = this.querySelector("[name=pages]").value;

  const book = {
    title,
    author,
    pages,
    done: false,
  };

  books.push(book);
  populateBooks(books, booksList);
  localStorage.setItem("books", JSON.stringify(books));
  this.reset();
}

function populateBooks(items = [], itemsList) {
  itemsList.innerHTML = items
    .map((item, i) => {
      return `
        <div class="book-card">
          <h3>${item.title}</h3>
          <h4>${item.author}</h4></h4>
          <div class="book-details">
            <p>${item.pages} Pages</p>
            <input type="checkbox" data-index=${i} id="item${i}" />
            <label for="read">Read</label>
          </div>
        </div>
        `;
    })
    .join("");
}

addBooks.addEventListener("submit", addBook);

populateBooks(books, booksList);
