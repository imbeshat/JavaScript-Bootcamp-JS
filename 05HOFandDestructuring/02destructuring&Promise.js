// destructuring and Spread and Rest

// const sci = [2.72, 3.14, 9.81, 37, 100];
// let [e, pi, grav, bodytemp, boiltemp] = sci;

// console.log(e, pi, grav, bodytemp, boiltemp);

// const arr1 = [1, 2, 3];
// let [var1, , var2] = arr1;
// console.log(var1, var2);

// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// let [num1, num2, ...rest] = arr2;
// console.log(num1, num2);
// console.log(rest);

// Spread

// function sumone(x, y) {
// 	return x + y;
// }
// // Variable is Array
// let variable = [9, 7, 10, 11, 12, 13];
// console.log(sumone(...variable));

// Rest

// function sum(...args) {
// 	console.log(args);
// 	let sum = 0;
// 	for (const x of args) {
// 		sum = sum + x;
// 	}
// 	return sum;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Try and Catch

// Syntax
// try {
// 	let firstname = "bot";
// 	console.log(firstname, lastname);
// } catch (err) {
// 	console.log("Variable name missing");
// } finally {
// 	console.log("I will run");
// }

// if (lastname == undefined) {
// 	throw new Error("lastname is not defined");
// }

// Event loop = completed

// Task one completed
// const userOne = () => {
// 	console.log("hello One");
// };

// // task => Depen
// const userTwo = () => {
// 	setTimeout(() => {
// 		// promise =>Resolve Rejected
// 		console.log("Hello i am inside");
// 	}, 3000);
// 	console.log("hello two");
// };
// const userthree = () => {
// 	console.log("hello three");
// };

// userOne();
// userTwo();
// userthree();

// promise

const one = () => {
	return "index page";
};

const two = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Credential Correct");
		}, 3000);
	});
};

const three = () => {
	return "redicret to home page";
};

const callMe = async () => {
	let Valone = one();
	console.log(Valone);

	let ValTwo = await two();
	console.log(ValTwo);

	let ValThree = three();
	console.log(ValThree);
};

callMe();
