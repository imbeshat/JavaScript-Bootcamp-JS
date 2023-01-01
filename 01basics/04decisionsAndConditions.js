// if-else

let age = 7;

if (age < 18) {
	console.log("You cand't drive");
} else if (age == 18) {
	console.log("You are 18. You can drive");
} else if (age >= 18) {
	console.log("You age is greater than 18. You can drive");
} else {
	console.log("You are below 18. You can not drive");
}

//  Switch Case

let user = "Admin";

switch (user) {
	case "Admin":
		console.log("Redirect to the Admin Page");
		break;
	case "User":
		console.log("Redirect to the User Page");
		break;
	default:
		console.log("I am a Guest");
}

// ternary Opeartor / Ternary Condition
// Condition?True:Flase

let loggedIn = true;

loggedIn ? console.log("logout button") : console.log("login button");
