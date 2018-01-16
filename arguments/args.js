// function sum() {
//   let arr = Array.from(arguments);
//   let sumSoFar = 0;
//
//   arr.forEach((val)=> {
//     sumSoFar+=val;
//   });
//
//   return sumSoFar;
// }

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

function sum(...args) {
  let sumSoFar = 0;

  args.forEach((val)=> {
    sumSoFar+=val;
  });

  return sumSoFar;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

// Function.prototype.myBind = function(context) {
//   let boundTarget = this;
//   let boundArgs = Array.from(arguments).slice(1);
//
//   return function _boundCallback() {
//     let callArgs = Array.from(arguments);
//     boundTarget.apply(context, boundArgs.concat(callArgs));
//   };
// };

Function.prototype.myBind = function(context, ...boundArgs) {
  let boundTarget = this;

  return function _boundCallback(...callArgs) {
    boundTarget.apply(context, boundArgs.concat(callArgs));
  };
};

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
//
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// // Breakfast says meow to me!
// // true

function curriedSum(numArgs) {
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sumSoFar = 0;
      numbers.forEach((val) => {
        sumSoFar += val;
      });
      return sumSoFar;
    }
    return _curriedSum;
  }
  return _curriedSum;
}

// const new_sum = curriedSum(4);
// console.log(new_sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function (numArgs) {
  let elements = [];
  let context = this;

  function curriedElements (el) {
    elements.push(el);
    if (elements.length === numArgs) {
      // return context.apply(null, elements);
      return context.call(null, ...elements);
    } else {
      return curriedElements;
    }
  }

  return curriedElements;
};

let addFunc = function (x, y, z) {
  return x + y + z;
};

let a = addFunc.curry(3);
console.log(a(1)(2)(3));





/// pawjdoihasoudhawoijawiojeiqe
