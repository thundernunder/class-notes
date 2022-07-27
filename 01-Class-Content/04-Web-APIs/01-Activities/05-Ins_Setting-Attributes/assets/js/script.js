// Access multiple elements using .querySelectorAll()
var divTags = document.querySelectorAll("div");
var pTags = document.querySelectorAll("p");

// Access element by ID using .querySelector()
var changeP = document.querySelector("#change2");

var img1 = document.querySelector("img");

// Sets first pTags to have a font-size of 40px
pTags[0].setAttribute("style", "font-size: 40px");
// setAttribute takes two parameters (attribute, style)


// Sets changeP to have multiple style attributes
 changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration: underline;");

 // Sets image source of the first image
 img1.setAttribute("src", "./assets");
 

// Adds size and width styling to image
 img1.setAttribute("style", "width: 50%;");

// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i=0; i < divTags.length; i++) {
    divTags[i].setAttribute("style", "color: blue; font-size: 30px;")
}
 
