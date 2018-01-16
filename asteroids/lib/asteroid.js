const Asteroid = function Asteroid(options = {}) { // pos, vel, color = "gray", radius = 10) {
  options.pos = pos;
  options.vel = vel;
  options.RADIUS = 10;
  options.COLOR = "gray";

  MovingObject.call(this, options);
};

// Util.inherits(Asteroid, MovingObject);
