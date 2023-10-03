const container = document.querySelector(".grid-container");
const slider = document.getElementById("size");
let sizeValue = document.getElementById("size-value");

let gridSize = slider.value;

function createGrid() {
  for (j = 0; j < gridSize; j++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (i = 0; i < gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
  }
}

createGrid();

function handleChange() {
  container.innerHTML = "";
  gridSize = slider.value;
  sizeValue.innerText = `${slider.value} x ${slider.value}`;
  createGrid();
}
