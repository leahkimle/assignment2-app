function Monkey(name, age) {
  this.name = name;
  this.age = age;
  this.image = "monkey.jpg";
  this.type = "Monkey";
}

function Bear(name, age) {
  this.name = name;
  this.age = age;
  this.image = "bear.jpg"
  this.type = "Bear";
}

function Kangaroo(name, age) {
  this.name = name;
  this.age = age;
  this.image = "kangaroo.jpg"
  this.type = "Kangaroo";
}

var animals = [new Monkey(), new Bear(), new Kangaroo()];
var names = ["Boo", "Doo", "Moo", "Nana", "Ana", "Jim"];


function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Monkey) 
  {
    return new Monkey(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Bear) 
  {
    return new Bear(generateRandomName(), generateRandomAge());
  } 
  else if (randomAnimal instanceof Kangaroo) 
  {
    return new Kangaroo(generateRandomName(), generateRandomAge());
  }
}


function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}


function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

$(document).ready(function() {

  var animal = generateRandomAnimal();
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

});