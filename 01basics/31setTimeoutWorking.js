console.log("Start");

setTimeout(function cb() {
	console.log("Callback");
}, 5000);

console.log("End");

// Here, the setTimeout function is a higher order function. It takes a callback function as an argument. The callback function is pushed in the callback queue after 5 seconds. The callback function is pushed in the callstack only when the callstack is empty. So, the callback function is pushed in the callstack after 5 seconds.

// When the call stack is empty, we still have the callback function to be executrd. For that we have the event loop and callback queue. The event loop checks if the callstack is empty. If it is empty, it pushes the callback function in the callstack through the callback queue. This is how the callback function is executed after 5 seconds.
