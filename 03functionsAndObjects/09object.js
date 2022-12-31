let userName = {
	firstName: "Tony",
	lastName: "Stark",
	role: "admin",
	loginCount: 23,
};

console.log(userName);
console.log(userName.lastName); // recommended
console.log(userName["firstName"]); // not recommended

userName.loginCount = 30;
console.log(userName);
