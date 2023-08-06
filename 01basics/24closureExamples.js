function outer() {
	var a = 10;
	function inner() {
		console.log(a);
	}
	return inner;
}
outer()(); // or var close = outer(); close(); - used to call the inner function from outside the outer function.

function moreouter(c) {
	var b = 20;
	function moreinner() {
		console.log(b);
		console.log(c); // c is not defined in the inner function but it is defined in the outer function. So, it will form a closure with the outer function.
	}
	return outer;
}
moreouter(30)()(); // or var close = moreouter(30); close()(); - used to call the inner function from outside the outer function.
