var comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
var arithmaticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not"];
var myString = "Hello String";

//Array Methods
// Sorts comparisonOperators array and returns the sorted array
comparisonOperators.sort();
<<<<<<< HEAD


//Logs sorted array
console.log(comparisonOperators);

=======

//Logs sorted array
console.log(comparisonOperators);
>>>>>>> 25fbf8a5abd6abe34701af6d986fb92640f53179
// Adds elements to end of an array. Takes in at least one parameter
arithmaticOperators.push("%");

//Logs array with element "%" added to end
console.log(arithmaticOperators);

//Returns selected elements as a new array.
<<<<<<< HEAD
var logicalOperatorsSliced = logicalOperators.slice(0,1);
// parameters of slice method is where you want the slice to begin and end.  second parameter is where the slice stops, it does not include that value, why "or" is not included above. 


=======
var logicalOperatorsSliced = logicalOperators.slice(0, 2);
>>>>>>> 25fbf8a5abd6abe34701af6d986fb92640f53179

//Logs new array
console.log(logicalOperatorsSliced);

// The orginal array is unchanged
console.log(logicalOperators);
<<<<<<< HEAD

//String Methods
//Replaces "String" with "World" and returns new string
var nyNewString = myString.replace("String", "World");

// replace parameters are("thing you want replace", "what you want to replace it with")

//The orginal string is unchanged

console.log(myString);

=======
var number = 1;
//String Methods
//Replaces "String" with "World" and returns new string
var myNewString = myString.replace("String", 1);

//The orginal string is unchanged
console.log(myNewString);
>>>>>>> 25fbf8a5abd6abe34701af6d986fb92640f53179
