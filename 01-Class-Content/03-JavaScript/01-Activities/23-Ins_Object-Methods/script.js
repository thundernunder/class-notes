// Objects can store more than primitive data types like strings, booleans and numbers
var planet = {
    name: "Earth",
    age: "4.543 billion years",
    moons: 1,
    isPopulated: true,
    population: "7.594 billion",
    neighboringPlanets: ["Mars", "Venus"],
    tellFunFact: function (x, y, z) {
        console.log("The earth is the only planet that is not named after a Roman god or godess");
    },
    showWarning: function () {
        console.log("Space junk falls in to Earth's atmosphere at the rate of about one a day");
    }
};

<<<<<<< HEAD

// To call a method, use the name of the object and the key. Don't forget the ()!
console.log(planet.neighbors);

=======
// To access a value in an array, use the name of the object, the key and the index.
// Logs "Mars" using dot notation
console.log(planet.neighboringPlanets[0]);

// Logs "Mars" using bracket notation
console.log(planet['neighboringPlanets'][0]);

// To call a method, use the name of the object and the key. Don't forget the ()!
planet.tellFunFact();
planet.showWarning();
>>>>>>> 25fbf8a5abd6abe34701af6d986fb92640f53179
  
