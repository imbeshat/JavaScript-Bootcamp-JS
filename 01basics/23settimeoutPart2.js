function x() {
	for (var i = 1; i <= 5; i++) {
		setTimeout(function () {
			console.log(i);
		}, i * 1000);
	}
	console.log("Bye");
}
x(); // first Bye will be printed and then 6 will be printed 5 times after every 1 second because of closure.

// setTimeout will store all the 5 functions in the callback queue and when the timer expires it is too late to, so value of i will be 6 as the loop was constantly running and when the timer expired the value of i was 6. So, 6 will be printed 5 times after every 1 second.

// The value of i is same because this i is referencing to the same spot in memory

function x() {
	for (let i = 1; i <= 5; i++) {
		setTimeout(function () {
			console.log(i);
		}, i * 1000);
	}
	console.log("Bye");
}
x();

// Here the value of i is different because let is block scoped and it will create a new memory location for each iteration of the loop. So, 1 will be printed after 1 second, 2 will be printed after 2 seconds and so on.

// setTimeout function forms a closure with the new value of i in each iteration of the loop.

function x() {
	for (var i = 1; i <= 5; i++) {
		function close(i) {
			setTimeout(function () {
				console.log(i);
			}, i * 1000);
		}
		close(i);
	}
	console.log("Bye");
}

// Here we are passing the value of i to the close function and then the close function is forming a closure with the value of i passed to it. So, 1 will be printed after 1 second, 2 will be printed after 2 seconds and so on.

// Earlier the problem was that the setTimeout function was forming a closure with the same value of i or referencing to the same i in each iteration of the loop. But now we are passing the value of i to the close function and then the close function is forming a closure with the value of i passed to it. So, 1 will be printed after 1 second, 2 will be printed after 2 seconds and so on.
