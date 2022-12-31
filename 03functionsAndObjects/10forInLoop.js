let userName = {
	firstName: "Tony",
	lastName: "Stark",
	role: "admin",
	loginCount: 23,
};

// for in loop is used with objects

for (let key in userName) {
	console.log(key);
	console.log(userName[key]);
}
