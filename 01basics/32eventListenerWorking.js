console.log("Start");

document.getElementById("btn").addEventListener("click", function cb() {
	console.log("Callback");
});

console.log("End");

// Here, the callback function is pushed in the callback queue when the button is clicked. The callback function is pushed in the callstack only when the callstack is empty. So, the callback function is pushed in the callstack when the button is clicked.

// addEventListener registers a callback on an event. The callback is pushed in the callback queue when the event occurs. The callback is pushed in the callstack only when the callstack is empty. So, the callback is pushed in the callstack when the event occurs.

// we need callback queue because when user clicks the button continuously multiple times, then the callback function is pushed in the callback queue multiple times. The callback function is pushed in the callstack only when the callstack is empty. So, the callback function is pushed in the callstack when the callstack is empty. This is how the callback function is executed when the callstack is empty.
