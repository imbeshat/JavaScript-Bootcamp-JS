const courses = [
	{
		name: "JavaScript Course",
		price: "2.0",
	},
	{
		name: "ReactJS Course",
		price: "2.3",
	},
	{
		name: "Angular Course",
		price: "2.2",
	},
	{
		name: "Vue Course",
		price: "2.1",
	},
	{
		name: "MERN Course",
		price: "2.6",
	},
];

function generateList() {
	const ul = document.querySelector("ul");
	ul.innerHTML = "";

	courses.forEach((course) => {
		const li = document.createElement("li");
		li.classList.add("list-group-item");
		const name = document.createTextNode(course.name);
		li.appendChild(name);

		const span = document.createElement("span");
		span.classList.add("float-right");
		const price = document.createTextNode("$" + course.price);
		span.appendChild(price);

		ul.appendChild(li);
		li.appendChild(span);
	});
}

window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");
button.addEventListener("click", (e) => {
	e.preventDefault();
	courses.sort((a, b) => a.price - b.price);
	generateList();
});

const btnDiv = document.querySelector(".btn-div");
const btnPrimary = document.createElement("button");
btnPrimary.classList.add("btn", "btn-primary", "btn-lg", "mt-4");
const sortDesc = document.createTextNode("Sort Courses Desc");
btnPrimary.appendChild(sortDesc);
btnDiv.appendChild(btnPrimary);

btnPrimary.addEventListener("click", (e) => {
	e.preventDefault();
	courses.sort((a, b) => b.price - a.price);
	generateList();
});
