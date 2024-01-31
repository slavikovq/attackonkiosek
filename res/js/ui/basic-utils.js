export class Background {

  constructor() {
    this.img = new Image();
    this.path = "./res/img/background.png";
    this.img.src = this.path;
    this.ratio = 0.90;
    this.size = {
      width: 1400 * this.ratio,
      height: 460 * this.ratio,
    };
    this.position = {
      x: 0,
      y: 180,
    };
  }

  draw(ctx) {
    ctx.drawImage(this.img, this.position.x, this.position.y, this.size.width, this.size.height);
  }

}
