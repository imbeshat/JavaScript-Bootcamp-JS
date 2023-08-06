function outest() {
	var c = 20;
	function outer(b) {
		function inner() {
			console.log(a, b, c);
		}
		let a = 10;
		return inner;
	}
	return outer;
}

let a = 100; // This is not used in the inner function. So, it will not form a closure with the inner function. This is not used because js finds a in the inner function and uses it. If it does not find a in the inner function, it will look for a in the outer function. If it does not find a in the outer function, it will look for a in the global scope. If it does not find a in the global scope, it will throw a reference error.
var close = outest()(200);
