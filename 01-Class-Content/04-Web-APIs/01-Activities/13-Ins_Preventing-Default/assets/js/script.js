var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

// default behaviour for input is to clear text. use preventDefault to alter this 

function showResponse(event) {
    // prevent default action for input
    event.preventDefault();
    console.log(event);
    var response = `thank you for your submission ${nameInput.value}. We will reach out to you soon`;
    submissionResponseEl.textContent = response;
}

submitEl.addEventListener("click", showResponse);


