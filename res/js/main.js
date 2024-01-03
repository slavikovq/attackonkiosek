import { Character } from "./characters/Character.js";
import { Background } from "./ui/basic-utils.js";

const frafta = new Character("Frafta", 1000, 1, 0.1, 0);
const background = new Background();

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// vlastnosti objektu - atributy

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
//pokud se frafta dostane do pulky canvasu, zastavi se utoci
const update = () => {
  frafta.update(1);
  if (frafta.position.x >= 640) {
    frafta.update(1);
    frafta.hp--;
    console.log(frafta.hp);
    if (frafta.hp <= 0) {
      frafta.update(2);
    }
  } else {
    frafta.update(0);
  }
};
const render = () => {
  frafta.draw(ctx);
};
const getFps = () => {};

//Kdyz se nam stranka nacte, spustime fci
window.onload = () => {
  window.requestAnimationFrame(gameLoop);
};
