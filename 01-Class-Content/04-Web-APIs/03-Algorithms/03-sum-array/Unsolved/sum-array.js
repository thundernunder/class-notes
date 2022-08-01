// Write code to add all the numbers in `arr` and return the total
var arr = [3,1,5,6]

var sumArray = function(arr) {
    var result = 0;

    for (i=0; i < arr.length; i++) {
        var currentNumber = arr[i];
        result += currentNumber;
        // += adds the number and then saves the result. take currentNumber and add it to result, = sign then saves the result
    }

    return result;
    // return result outside value of for loop
};
