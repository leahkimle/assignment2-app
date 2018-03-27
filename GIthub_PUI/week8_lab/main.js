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

  var animal = JSON.parse(localStorage.getItem("savedAnimal"));

  var hasSavedAnimal = false;

  if (animal === null) 
  {
    $("#button-storage").text("Save Animal");

    animal = generateRandomAnimal();
  } 
  else 
  {
    $("#button-storage").text("Clear Animal");

    hasSavedAnimal = true;
  }

  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);


  $("#button-storage").click(function() {
    if (hasSavedAnimal) 
    {
      localStorage.removeItem("savedAnimal");

      $("#button-storage").css("display", "none");
      $("#button-action-text").text("Cleared!");
      $("#button-action-text").css("display", "block");
    } 
    else 
    {
      localStorage.setItem("savedAnimal", JSON.stringify(animal));

      $("#button-storage").css("display", "none");
      $("#button-action-text").text("Saved!");
      $("#button-action-text").css("display", "block");
    }
  });

});