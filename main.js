const board = document.querySelector(".board");
const gridRow = 20;
const gridColumn = 50;
const gridSize = gridColumn * gridRow;

for (let i = 0; i < gridSize; i++) {
  let div = document.createElement("div");

  div.style.flexBasis = `${100 / gridColumn}%`;
  div.style.height = `${100 / gridRow}%`;
  div.style.backgroundColor = "yellow";
  board.appendChild(div);
}
