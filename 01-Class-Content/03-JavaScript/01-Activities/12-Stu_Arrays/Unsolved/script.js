// WRITE YOUR CODE HERE

var studentName = ["Nathan", "Kristen", "Henry", "Emily"];

console.log(`Welcome to the class, ${studentName[2]}`);
// better way to concactenate strings, no spacing issues and no "+" signs

studentName[0] = "Bobby";
// reassign first name in array

if (studentName[0] === "Bobby") {
    // "===" is strict literal. compares value and type
    console.log("fuck ya");
} else {
    console.log("nope");
}