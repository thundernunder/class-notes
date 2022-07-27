var a = 100;
var b = 10;

// addition 
console.log(a + b);

// subtraction
console.log(a-b);

// division 
console.log(a / b);

// multiplication 
console.log(a * b);

// reminder (modulas)
console.log(a % b);


var c = "10";

// comparison operators. determine equality or difference of values
// equality 
console.log(b == c);
// "true". value is equal. datatype is different "==" compares values only

// strict literal. compares value AND datatype 
console.log(a === b);
// "false". value is equal but datatypes are different 

//inequality 
console.log(b != c);
// "false"

// strict inequality 
console.log(b !== c);
// "true"

// greater than/less than 
console.log(a > b);
console.log(a < b);

// greater than or equal to/less than or equal to
console.log(a >= b);
console.log(a <= b);

// logical operators 
var expression = (b == c);
var expression2 = (a > b);
console.log(expression);
// "true"
console.log(expression2);
// "true"

// AND logical operator. both expressions must be true to return "true"
console.log(expression && expression2);

// OR logical operator. "true" if expression OR expression2 is true 
console.log(expression || expression2);

// logical not - returns inverse of what expression currently returns 
console.log(!expression);
// "false"


