export class Character {
  constructor(name, hp, dmg, speed, type) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.speed = speed;
    this.img = new Image();
    this.setType(type);
    this.img.src = this.path;
    this.ratio = 0.3;
    this.size = {
      width: 336 * this.ratio,
      height: 634 * this.ratio,
    };
    this.position = {
      x: 100,
      y: 350,
    };
  }
  setType(type) {
    const characterTypes = ["./res/img/fraftik4brady.png"];
    this.path = characterTypes[type];
  }

  draw(ctx) {
    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }

  update(state) {
    switch (state) {
      case 0:
        this.position.x++; //jde
        break;
      case 1:
        console.log(this.name + "attacks!");
        break;
      case 2:
        console.log(this.name + "umira");
        this.position.x = 0;
        this.hp = 1000;
        break;
      default:
    }
  }
}

//this - slovo ukazujici na dany objekt
//fce - stoji sama o sobe
//metoda - taky fce, ale patri nejakymu objektu
//kopie od sablony - objekt (object) - instance
//constructor - metoda, ktera se vola kdyz vytvorime instanci od tridy - kopii od sablony
//const myCharacter = new Character("Urban", 100, 5, 0.5);
