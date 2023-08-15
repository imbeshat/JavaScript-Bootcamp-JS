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
