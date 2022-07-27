// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log('They are equal in type and value');
  } else if (x == y) {
    console.log('They are equal in value');
  } else {
    console.log('They are not equal');
  }
  return;
}

// Logs "They are equal in type and value"
isEqual(10, 10);

// Refer to sample functions as needed!

// TODO: Call the isEqual function so that it logs "They are equal in value"
isEqual(10, "10");

// TODO: Rewrite isEqual as a function expression called 'isEqualTakeTwo`
var isEqualTakeTwo = function isEqual(x, y) {
  if (x === y) {
    console.log("They are equal in type and value");
  } else if (x == y) {
    console.log("They are equal in value);");
  } else {
    console.log("They are not equal");
  }
}

// TODO: Call the isEqualTakeTwo function so that it logs "They are not equal"
isEqualTakeTwo(9, 10);

function add7() {
  console.log(poop + 7);
}

var poop = 4;

add7();

var x = 3;
var y = 2;

function multiply() {
  console.log(x*y);
}

multiply();

var string = "Let there be light";

function capitalize() {
  console.log(string.charAt(2));
  return;
}

capitalize();

function lastLetter() {
  console.log(string.slice(-2, -1));
  return;
}

lastLetter();

var item = 4;
function doubleItem(item) {
  return item * 2;
}

doubleItem();