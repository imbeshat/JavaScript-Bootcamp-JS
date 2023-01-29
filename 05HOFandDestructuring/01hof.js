// For Each
// forEach() is HOF, the () => {} inside it is callback

// const arr = ["Batman", "Superman", "Ironman", "Spiderman", "Thor"];
// arr.forEach((superHero) => {
// 	console.log(superHero);
// });

// 2nd way
// arr.forEach(myfunc);
// function myfunc(val) {
// 	console.log(val);
// }

// SetTimeOut

// setTimeout(() => {
// 	console.log("Hello SupeHeroes!");
// }, 3000);

// setInterval

// setInterval(() => {
// 	console.log("😇");
// }, 1000);

// map

// const numbers = [1, 2, 3, 4, 5, 6];
// const numSquare = numbers.map((num) => num * num);
// console.log(numSquare);

// Filter

// const country = ["India", "Pakistan", "Canada", "Ireland", "England", "Kenya", "Finland"];

// const store = country.filter((val) => val.includes("land"));
// console.log(store);

// Reduce
// Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

// const num = [1, 2, 3, 4, 5, 6, 7];
// const sum = num.reduce((acc, curr) => acc + curr, 0);
// console.log(sum);

// find
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// const array = [5, 12, 8, 130, 44];
// const found = array.find((element) => element > 10);
// console.log(found);

// every
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// const array = [1, 30, 39, 29, 10, 13];
// const isBelowThreshold = array.every((currentValue) => currentValue < 40);
// console.log(isBelowThreshold);

// some
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

// const array = [1, 30, 39, 29, 10, 13];
// const isSome = array.some((currentValue) => currentValue > 30);
// console.log(isSome);

// sort
const array = [1, 30, 39, 29, 10, 13];
const Sort = array.sort();
console.log(Sort);
console.log(Sort.reverse());
