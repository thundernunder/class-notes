// A variable declared in global scope is available to all functions
var hello = "Hello";
// global scope is available at the entirety of our code
function sayHello() {
    console.log(hello);
    return;
    // return ends function execution. function won't run without it
}

sayHello();

//A variable declared in local scope is only available to that function

function sayGoodbye() {
    var goodbye = "Goodbye";
    console.log(goodbye);
}
//This will throw an error

console.log(goodbye);
// var goodbye is declared within function. only available in context of that function. can't be accessed from outside of that fucntion. 


// Shadowing happens when the same variable is used in the local and global scope

var shadow = "Hello";
// shadow declared globally

function sayWhat() {
    console.log(shadow);
    return;
}

var sayWhatAgain = function() {
    var shadow = "Goodbye";
    // shadow declared locally
    console.log(shadow);
}

sayWhat()
sayWhatAgain()

// don't declare a variable in local and global scope. very hard to track and can easily cause mistakes. 

