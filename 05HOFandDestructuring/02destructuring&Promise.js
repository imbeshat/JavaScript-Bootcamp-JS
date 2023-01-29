// destructuring and Spread and Rest

// const sci = [2.72, 3.14, 9.81, 37, 100];
// let [e, pi, grav, bodytemp, boiltemp] = sci;

// console.log(e, pi, grav, bodytemp, boiltemp);

// const arr1 = [1, 2, 3];
// let [var1, , var2] = arr1;
// console.log(var1, var2);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
let [num1, num2, ...rest] = arr2;
console.log(num1, num2);
console.log(rest);
