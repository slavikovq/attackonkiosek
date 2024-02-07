import { Character } from "./characters/Character.js";
import { Background } from "./ui/basic-utils.js";

const urbicSpawn = document.getElementById("urbicSpawn");

urbicSpawn.addEventListener("click", (e) => {
  friendlyCharacters.push(new Character("UnrealUrbic"));
});

const background = new Background();
const friendlyCharacters = [];
const enemyCharacters = [];
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const keys = {};
//   Space: true
//   Space: false

document.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});

document.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

//hlavni smycka hry
const gameLoop = () => {
  //resizeCanvas
  resizeCanvas();

  //clearCanvas
  clearCanvas();

  //update
  update();

  //render
  render();

  //fps
  getFps();

  window.requestAnimationFrame(gameLoop);
};

const resizeCanvas = () => {
  canvas.width = 1280;
  canvas.height = 720;
};
const clearCanvas = () => {
  background.draw(ctx);
};
const update = () => {
  friendlyCharacters.map((a) => {
    a.update();
  });
  enemyCharacters.map((b) => {
    b.update();
  });
  detectCollision();
};
const render = () => {
  friendlyCharacters.map((a) => {
    a.draw(ctx);
  });
  enemyCharacters.map((a) => {
    a.draw(ctx);
  });
};
const getFps = () => {};

const detectCollision = () => {
for (const a of friendlyCharacters) {
  for (const b of enemyCharacters) {
    if (Character.detectCollision(a,b))return;
    };
  }


  /*friendlyCharacters.map((a) => {
    enemyCharacters.map((b) => {
      Character.detectCollision(a, b);
    });
  }); */
};

const loadData = async () => {
  const charactersData = await fetch("./res/data/characters.json");
  const convertedData = await charactersData.json();
  Character.charactersData = convertedData;
};

const prerender = () => {
  enemyCharacters.push(new Character("Frafticek"));
  friendlyCharacters.push(new Character("UnrealUrbic"));
};

//Kdyz se nam stranka nacte, spustime fci
window.onload = async () => {
  await loadData();
  prerender();
  window.requestAnimationFrame(gameLoop);
};
