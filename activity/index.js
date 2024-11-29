const size = 32; // The size of the playground (32x32)
const playGround = [];

// array of ghosts
let ghost = [
  {
    health: 5,
    x: createRandomNumber(),
    y: createRandomNumber(),
  },
  {
    health: 8,
    x: createRandomNumber(),
    y: createRandomNumber(),
  },
  {
    health: 11,
    x: createRandomNumber(),
    y: createRandomNumber(),
  },
  {
    health: 7,
    x: createRandomNumber(),
    y: createRandomNumber(),
  },
];

function createRandomNumber() {
  return Math.floor(Math.random() * 32);
}

// Table
for (let i = 0; i < size; i++) {
  let row = [];
  for (let j = 0; j < size; j++) {
    row.push(" ");
  }
  playGround.push(row);
}

// creating the playground

const playGroundDisplay = document.getElementById("playground");

for (let i = 0; i < playGround.length; i++) {
  let row = document.createElement("tr");

  for (let j = 0; j < playGround[i].length; j++) {
    let cell = document.createElement("td");
    cell.textContent = playGround[i][j];
    cell.classList.add("box-cell");
    row.appendChild(cell);
  }

  playGroundDisplay.appendChild(row);
}

// for pacman

let ghostEaten = 0;

let pacman = {
  health: 10,
  power: 1,

  positionY: 5,
  positionX: 4,
};

// for displaying in html
let healthTxt;
let ghostEatenTxt;

// display text on start

window.onload = function () {
  healthTxt = document.getElementById("health-txt");
  ghostEatenTxt = document.getElementById("ghost-eaten");
  healthTxt.textContent = pacman.health;

  spawnGhost();
  update();
};

document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 37:
      //   alert("Left key");
      movePlayer("left");
      break;
    case 38:
      //   alert("Up key");
      movePlayer("up");
      break;
    case 39:
      //   alert("Right key");
      movePlayer("right");
      break;
    case 40:
      //   alert("Down key");
      movePlayer("down");
      break;
  }
};

function movePlayer(direction) {
  let pacmanVis = playGroundDisplay.rows[pacman.positionX].cells;
  pacmanVis[pacman.positionY].textContent = " ";

  if (direction == "up") {
    pacman.positionX -= 1;
  } else if (direction == "down") {
    pacman.positionX += 1;
  } else if (direction == "right") {
    pacman.positionY += 1;
  } else if (direction == "left") {
    pacman.positionY -= 1;
  }

  update();
  checkCollission();
}

function update() {
  player();
}

function checkCollission() {
  for (let i = 0; i < ghost.length; i++) {
    if (pacman.positionX == ghost[i].x && pacman.positionY == ghost[i].y) {
      if (pacman.health >= ghost[i].health) {
        ghostEaten += 1;
      } else {
        pacman.health -= ghost[i].health;
        if (pacman.health <= 0) {
          pacman.health = 0;
          alert("Game Over");
        }
      }

      healthTxt.textContent = pacman.health;
      ghostEatenTxt.textContent = ghostEaten;
    }
  }
}

function player() {
  let pacmanDiv = document.createElement("div");
  pacmanDiv.classList.add("pacman");

  let pacmanVis = playGroundDisplay.rows[pacman.positionX].cells;
  pacmanVis[pacman.positionY].appendChild(pacmanDiv);
}

function spawnGhost() {
  for (let i = 0; i < ghost.length; i++) {
    let ghostDiv = document.createElement("div");
    ghostDiv.classList.add("ghost");
    let ghostVis = playGroundDisplay.rows[ghost[i].x].cells;
    ghostVis[ghost[i].y].appendChild(ghostDiv);
  }
}
