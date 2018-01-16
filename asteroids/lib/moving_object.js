function MovingObject(options) {
  this.pos = options['pos'];
  this.vel = options['vel'];
  this.radius = options['radius'];
  this.color = options['color'];
}

MovingObject.prototype.draw = function (ctx) {
  const canvas = document.getElementById("canvas");

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], 5, 0, 2*Math.PI);
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0]+= this.vel[0];
  this.pos[1]+= this.vel[1];
};
