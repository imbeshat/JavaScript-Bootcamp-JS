console.log("Start");

setTimeout(function cbT() {
	console.log("Callback SetTimeout");
}, 5000);

fetch("https://api.github.com/users").then(function cbF() {
	console.log("Callback Fetch");
});

console.log("End");

// Output:
// Start
// End
// Callback Fetch
// Callback SetTimeout
