// Functions are reusable blocks of code that perform a specific task
// This is a function declaration
function declareHello() {
    console.log("Hello. I am a function declaration");
    console.log("------------");
    return;
}


// This is a function expression

var expressHello = function() {
    console.log("I am an expression");
    console.log("------------");
    return;
}


// Functions must be called to execute
declareHello();
expressHello();

//Functions can be called again to make the block of code execute again
declareHello();
expressHello();

// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
function declareHelloAgain(x, y, z) {
    x = 22
    console.log(`Hello, my values are ${x}, ${y}, ${z}`);
    console.log("------------");
}

// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called

declareHelloAgain(7, "Hello")
