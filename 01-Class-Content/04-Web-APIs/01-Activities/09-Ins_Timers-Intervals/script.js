// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 10;



// Function to create and append colorsplosion image
var timerInterval  = setInterval(function() {
    secondsLeft--
    timeEl.textContent = secondsLeft + " seconds left until colorsplosion";

    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        // stop execution of action at certain interval 
        sendMessage();
    }
}, 1000);

// setInterval takes two parameters, function and timing setting 

function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "./images/image_1.jpg");
    mainEl.appendChild(imgEl);
}


