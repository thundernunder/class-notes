//WRITE YOUR CODE BELOW
<<<<<<< HEAD
var customerOrder = {
    drinkName: "Cold Brew",
    numberSugars: 40,
    isReady: false,
}

console.log(customerOrder);

console.log(customerOrder.drinkName);

console.log(customerOrder.numberSugars);

if (customerOrder.isReady === true) {
    console.log("Ready for pickup");
} else {
    console.log("Still in the queue");
}

// shorthand if boolean value is first 

if (customerOrder.isReady) {
    console.log("ready for pickup");
} else {
    console.log("still in queue");
=======

var customerDrink = {
    name: "coffe",
    sugars: 3,
    isReady: false
};

console.log(customerDrink);

if (customerDrink.isReady) {
    console.log("Ready for pick-up");
} else {
    console.log("Still in order queue");
>>>>>>> 25fbf8a5abd6abe34701af6d986fb92640f53179
}