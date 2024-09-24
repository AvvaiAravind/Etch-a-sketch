const select = document.querySelector("#popup");
select.addEventListener("click", getGridSize);

function getGridSize() {
  const gridSize = prompt("Enter a GridSize maximum upto 100");
  const message = document.querySelector(".message");
  if (gridSize === "" || gridSize === null || gridSize > 100 || gridSize < 1) {
    message.textContent = "Please Select a valid input between 1 to 100";
  } else {
    message.textContent = "Now you can play!";
    createGrid(gridSize);
  }
}

function createGrid(gridSize) {
  const board = document.querySelector(".board");
  /* const boardSize = Math.max(gridSize * 20, 500);
  board.style.maxWidth = `${boardSize}px`;
  board.style.maxHeight = `${boardSize}px`; */

  for (let i = 0; i < gridSize * gridSize; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
    div.style.flexBasis = `${100 / gridSize}%`;
    div.style.height = `${100 / gridSize}%`;
    div.style.backgroundColor = "yellow";
    board.appendChild(div);
  }
}
