function x() {
	var i = 1;
	setTimeout(function () {
		console.log(i);
	}, 3000);
	console.log("Bye");
}
x(); // first Bye will be printed and then after 3 seconds 1 will be printed because of closure.
