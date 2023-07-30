var a = 100; // This a is shadowed by the a inside the scope
{
	var a = 10;
	let b = 20;
	const c = 30;
	console.log(a); // 10
	console.log(b); // 20
	console.log(c); // 30
}
console.log(a); // 10
