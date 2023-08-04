function x() {
	var a = 7;
	function y() {
		console.log(a);
	}
	// a = 100; // This will change the value of a to 100 in the lexical scope of y() because of closure 100 is still in the memory(as a points to the reference of a in the lexical scope of y()).
	return y;
}

var z = x();
console.log(z); // [Function: y]

z(); // 7 - returns the function alon with its lexical scope.

// Uses of Closure:
// 1. Module Design Pattern
// 2. Currying
// 3. Function like once
// 4. Memoize
// 5. Maintaining state in async world
// 6. setTimeouts
// 7. Iterators
// 8. and many more...
