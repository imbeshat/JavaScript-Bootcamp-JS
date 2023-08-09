greet(); // During memory creation phase greet creates a memory and the function is assigned to it. So it can be called before the function is defined.

greetMe(); // In case of the function expression, greetMe is treated as any other variable, so it is assigned undefined initially until the code hits the end of the function and when JS engine reaches the code line by line then only function is assigned to the variable

// Function Statement
function greet() {
	console.log("hi");
}

// Function Expression - A function which can be assigned to a variable.
var greetMe = function () {
	console.log("Hi!!");
};
