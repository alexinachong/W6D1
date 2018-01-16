// USING SURROGATE
// Function.prototype.inherits = function(parent) {
//   function Surrogate() {}
//
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

// USING OBJECT.CREATE
Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
  this.prototype.constructor = this;
};

function MovingObject (color, speed, position) {
  this.position = position;
  this.speed = speed;
  // this.color = color;
  this.color = "green";
}

MovingObject.prototype.flies = function() {
  console.log(`It flies ${this.speed}!`);
};



function Ship (position, speed, color, crewSize) {
  this.position = position;
  this.speed = speed;
  this.color = color;
  this.crewSize = crewSize;
}

Ship.inherits(MovingObject);


let s = new Ship(1, "fast", "blue", 6);
// s.flies();
// console.log(s.color);

function Asteroid (position, speed, color, distanceFromSun) {
  this.position = position;
  this.speed = speed;
  this.color = color;
  this.distanceFromSun = distanceFromSun;
}

Asteroid.inherits(MovingObject);

Asteroid.prototype.crashesIntoEarth = function() {
  if (this.distanceFromSun < 10) {
    console.log(`Watch out! A ${this.color} asteroid is headed straight for Earth!`);
  } else {
    console.log(`No asteroids nearby - we're safe!`);
  }
};


let a = new Asteroid(100, 10000, "pink", 5);
a.crashesIntoEarth();
console.log(a.speed);
// s.crashesIntoEarth();
let m = new MovingObject("purple", "lightning fast", 30);
// m.crashesIntoEarth();
console.log(m.color);
