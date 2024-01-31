import { Character } from "./characters/Character.js";
import { Background } from "./ui/basic-utils.js";

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
  detectCollision();
};
const render = () => {
  friendlyCharacters.map((c) => {
    c.draw(ctx);
  });
  enemyCharacters.map((c) => {
    c.draw(ctx);
  });
};
const getFps = () => {};

const detectCollision = () => {
  friendlyCharacters.map((friendly) => {
    enemyCharacters.map((enemy) => {
      Character.detectCollision(friendly, enemy);
    });
  });
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
