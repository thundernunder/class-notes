// Stores user response in variable
var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");
// two parameters for prompt: 1. text above input box 2. help text in input box

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
    alert("Enter a valid tag, yo");
} else {
    var tag = document.createElement(tagName);
    // make html elements in the DOM on the fly

    tag.textContent = "This was made via a prompt. It's a " + tagName + " .";

    document.body.appendChild(tag);
    // append element to defined parent element. in this case is document.body. var tag will be appended to body, the designated parent elementd
}


