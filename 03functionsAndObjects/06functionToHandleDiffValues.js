// If we are not passing any arguments
// by default function will create memory for arguments

function sum() {
	let sum = 0;
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

let sumArray = sum(10, 20, 30, 40, 50);
console.log(sumArray);
