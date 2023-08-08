function a() {
	var x = 0,
		z = 10;
	return function b() {
		console.log(x);
	};
}

var y = a();
y(); // 0

// Here even after the execution of the whole proram, the x is not garbae collected as the program does not know when the x is not used. To counter this we have smart garbage collection

// For smart garbage collection we have a variable z which is not used so, it will be garbage collected later
