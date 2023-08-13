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

// Function Declaration - A function which is declared on the fly. It is same as the function statement

// Anonymous Function - A function without a name. It is used in the function expression. It is used when we don't want to reuse the function again. It does not have their own identity. Anonymous functions are used in a place where functions are used as values.
const a = function () {
	//Statements
};

// Named Function Expression - A function expression which has a name. It is used when we want to reuse the function again. It has its own identity. It is used in the recursion.
const b = function xyz() {
	//Statements
};
xyz(); // This will throw an error as xyz is not defined. xyz is only accessible inside the function. It is not accessible outside the function.
b(); // This will work as b is accessible outside the function.

// First Class Functions 0r First Class Citizens - A function which can be treated as a value. It can be passed as an argument to another function. It can be returned from another function. It can be assigned to a variable. It can be stored in a data structure like an array or an object.
var c = function (param1) {
	return function xyz() {
		console.log(param1);
	};
};
console.log(c()); // This will print the function definition
