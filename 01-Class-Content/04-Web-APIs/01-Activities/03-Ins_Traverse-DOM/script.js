console.log(document.body);

console.log(document.body.children);

// second child of the body
console.log(document.body.children[1]);

// first child of the second child of the body element 

console.log(document.body.children[1].children[0]);

// getElementById is used to access ID in html 
var firstChildUl = document.getElementById("first-child-ul");

// can apply dynamic styling to an element 
firstChildUl.style.color = "yellow";

firstChildUl.style.background = "red";




