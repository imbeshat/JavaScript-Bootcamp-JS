function sum(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

let sumArray = [12, 4, 2, 67, 3];
let sumResult = sum(sumArray);
console.log(sumResult);
