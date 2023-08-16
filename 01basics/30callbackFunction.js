setTimeout(function () {
	console.log("Hello Timer");
}, 5000);
// Here we are passing a function as an argument to another function. This is called a callback function. The function that receives the callback function is called a higher order function. The function that is passed as an argument is called a callback function.

function x(y) {
	console.log("x");
	y();
}

x(function y() {
	console.log("y");
});

// Event Listener foir callback function
document.getElementById("clickMe").addEventListener("click", function xyz() {
	console.log("Button Clicked");
});
// Here function xyz is a callback function. It is called when the button is clicked and is pushed in the callstack and is executed.
