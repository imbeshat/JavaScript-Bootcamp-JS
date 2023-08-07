function Counter() {
	let count = 0;
	this.incrementCounter = function () {
		count++;
		console.log(count);
	};

	this.decrementCounter = function () {
		count--;
		console.log(count);
	};
}
var counter = new Counter(); // new keyword is used for constructor
counter.incrementCounter(); // 1
counter.incrementCounter(); // 2
counter.incrementCounter(); // 3
counter.decrementCounter(); // 2
