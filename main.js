const select = document.querySelector("#popup");
select.addEventListener("click", getGridSize);
const footer = document.querySelector("footer");

let color = "";
let choice = "";
footer.addEventListener("click", (e) => {
  buttonfunc(e);
});

function buttonfunc(e) {
  const message = document.querySelector(".message");
  let target = e.target;

  switch (target.id) {
    case "reset":
      resetfunc();
      message.textContent = "";
      break;
    case "random":
      color = `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
      choice = "colorfull";

      break;
    default:
      choice = "black";
      color = "black";
  }
}
function getGridSize() {
  const gridSize = prompt("Enter a GridSize maximum upto 100");
  const message = document.querySelector(".message");
  if (gridSize === "" || gridSize === null || gridSize > 100 || gridSize < 1) {
    message.textContent = "Please Select a valid input between 1 to 100";
  } else if (gridSize < 8) {
    message.textContent = "please select above for minimum user experience";
    createGrid(gridSize);
  } else {
    message.textContent = "Now you can play!";
    createGrid(gridSize);
  }
}

function createGrid(gridSize) {
  const board = document.querySelector(".board");

  for (let i = 0; i < gridSize * gridSize; i++) {
    let div = document.createElement("div");
    if (choice == "colorfull") {
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = color;
      });
    } else {
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = color;
      });
    }

    div.style.flexBasis = `${100 / gridSize}%`;
    div.style.height = `${100 / gridSize}%`;
    div.style.backgroundColor = "white";

    board.appendChild(div);
  }
}

function resetfunc() {
  let div = document.querySelectorAll("div");
  div.forEach((curdiv) => {
    curdiv.style.backgroundColor = "white";
  });
  color = "white";
}

/* function colorTheDiv() {
  if (color === "random") {
    this.style.backgroundColor = `hsla(${Math.random() * 360}, 100%, 50%, 1)`;
  } else {
    this.style.backgroundColor = "black";
  }
} */
