const a = 20;
{
	const a = 10;
	{
		const a = 5;
		console.log(a); // 5
	}
	console.log(a); // 10
}
console.log(a); // 20
