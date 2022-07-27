<<<<<<< HEAD
// Objects are a collection of properties. storing multiples pieces of information for one variable
var planet = {
    name: "Earth", 
    age: "4.543 billion years",
    moons: 1,
    isPopulated: true,
    neighbors: ["Venus", "Mars", "Jupiter"]
};

console.log(planet);
=======
// Objects are a collection of properties
var planet = {
    name: "Earth",
    age: "4.543 billion years",
    moons: 1,
    isPopulated: true,
    neighbors: ["Venus", "Mars", "Mercury"]
};

var empty = {};
>>>>>>> 25fbf8a5abd6abe34701af6d986fb92640f53179

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);

<<<<<<< HEAD
// log a value of a variable within the object. mouthful i know.
console.log(planet.neighbors[2]);
=======
console.log(planet.neighbors[2]);

>>>>>>> 25fbf8a5abd6abe34701af6d986fb92640f53179

