const container = document.querySelector(".grid-container");
const slider = document.getElementById("size");
const square = document.querySelectorAll(".square");
const clear = document.getElementById("clear");
const blackBtn = document.getElementById("black");
const rainbowBtn = document.getElementById("rainbow");
const eraseBtn = document.getElementById("erase");

let sizeValue = document.getElementById("size-value");
let gridSize = slider.value;

let color = "black";
blackBtn.onclick = () => (color = "black");
rainbowBtn.onclick = () => (color = "rainbow");
eraseBtn.onclick = () => (color = "erase");


function createGrid() {
  for (j = 0; j < gridSize; j++) {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    for (i = 0; i < gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mouseover", changeColor);
      square.addEventListener("mousedown", changeColor);
      row.appendChild(square);
    }
  }
}

function handleSizeChange() {
  container.innerHTML = "";
  gridSize = slider.value;
  sizeValue.innerText = `${slider.value} x ${slider.value}`;
  createGrid();
}

function changeColor(e) {
  if (color === "rainbow") {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  } else if (color === "black") {
    e.target.style.backgroundColor = "#000000";
  } else if (color === "eraser") {
    e.target.style.backgroundColor = "#ffffff";
  }
  console.log(color);
}

function clearGrid() {
  container.innerHTML = "";
  createGrid();
}

clear.addEventListener("click", clearGrid);
blackBtn.addEventListener("click", changeColor);
rainbowBtn.addEventListener("click", changeColor);
eraseBtn.addEventListener("click", changeColor);

window.onload = () => {
  createGrid();
};
