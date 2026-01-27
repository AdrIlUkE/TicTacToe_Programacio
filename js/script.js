let isPlayerOne = true;
let cells = document.getElementsByClassName("cell");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", userMove);
}

function userMove(e) {
  let cellValue = e.target.innerHTML;

  if (!cellValue.length) {
    e.target.innerHTML = isPlayerOne ? "X" : "O";
    isPlayerOne = !isPlayerOne;

    checkLine(0, 1, 2);
    checkLine(3, 4, 5);
    checkLine(6, 7, 8);
    checkLine(0, 3, 6);
    checkLine(1, 4, 7);
    checkLine(2, 5, 8);
    checkLine(0, 4, 8);
    checkLine(6, 4, 2);
  }
}

function checkLine(c1, c2, c3) {
  if (
    cells[c1].innerHTML.length &&
    cells[c1].innerHTML === cells[c2].innerHTML &&
    cells[c2].innerHTML === cells[c3].innerHTML
  ) {
    showWinner(cells[c1].innerHTML);
  }
}

function showWinner(player) {
  document.getElementById("results").innerHTML = player + " gana ";

  for (let i = 0; i < cells.length; i++) {
    cells[i].removeEventListener("click", userMove);
  }
}

document.getElementById("restart").addEventListener("click", () => {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    cells[i].addEventListener("click", userMove);
  }
  document.getElementById("results").innerHTML = "";
  isPlayerOne = true;
});


