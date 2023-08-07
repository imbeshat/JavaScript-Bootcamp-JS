// Data Privacy - Hiding Data from the other functions

var count = 0;
function increment() {
	return ++count;
}

console.log(count); // 0

function counter() {
	var counte = 0;
	function incrementCounter() {
		return ++counte;
	}
}
console.log(counte); // ReferenceError: counte is not defined - Hiding Data from the other
