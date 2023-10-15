let addBookBtn = document.querySelectorAll("#add");
const closeFormBtn = document.querySelector("#exit");
const addForm = document.querySelector(".form-container");

function openForm() {
  addForm.classList.add("open");
}

function closeForm() {
  addForm.classList.remove("open");
}

const addBooks = document.querySelector(".add-books");
const books = JSON.parse(localStorage.getItem("books")) || [];
const booksList = document.querySelector(".book-container");

function addBook(e) {
  e.preventDefault();
  const title = this.querySelector("[name=title]").value;
  const author = this.querySelector("[name=author]").value;
  const pages = this.querySelector("[name=pages]").value;
  const isRead = document.getElementById("isRead").checked;

  const book = {
    title,
    author,
    pages,
    isRead: false,
  };

  books.push(book);
  populateBooks(books, booksList);
  localStorage.setItem("books", JSON.stringify(books));
  this.reset();
  addForm.classList.remove("open");
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
            <input type="checkbox" data-index=${i} id="${i}" ${
        item.isRead ? `checked` : ``
      } />
            <label for="read">Read</label>
          </div>
        </div>
        `;
    })
    .join("");
}

addBooks.addEventListener("submit", addBook);


for (var i = 0; i < addBookBtn.length; i++) {
  addBookBtn[i].addEventListener("click", openForm);
}


closeFormBtn.addEventListener("click", closeForm);

populateBooks(books, booksList);
