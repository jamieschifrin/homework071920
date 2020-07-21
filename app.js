//falsy

function bouncer(arr) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }

  //chunky

  function chunkArrayInGroups(arr, size) {
    var temp = [];
    var result = [];
  
    for (var a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
  }

  let dog = {

    fur : "long", 
    legs : 4,
    bites : "yes"

    
};


//dot notation
let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line
console.log(dog.name);
console.log(dog.numLegs);

//method

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs.";
  }
};

dog.sayLegs();

//THis

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + this.numLegs + " legs.";
  }
};

dog.sayLegs();

//constructor
function Dog() {
  (this.name = "Geogre"), (this.color = "White"), (this.numLegs = 4);
}

//objects
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Add your code below this line
let hound = new Dog();

//Extend Constructors to Receive ArgumentsPassed
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog("George", "White");

//Verify an Object's Constructor with instanceof

/* jshint expr: true */

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Add your code below this line
let myHouse = new House(5);
myHouse instanceof House;

//Understand Own PropertiesPassed

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

// Use Prototype Properties to Reduce Duplicate CodePassed

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Add your code above this line
let beagle = new Dog("Snoopy");




