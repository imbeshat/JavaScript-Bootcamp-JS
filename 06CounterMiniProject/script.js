let counter = document.getElementsByClassName("counter");
let followers = document.getElementsByClassName("followers");

let count = 1;

setInterval(() => {
	if (count < 1000) {
		count++;
		counter[0].innerText = count;
	}
}, 1);

setTimeout(() => {
	followers[0].innerText = "Followers on Instagram";
}, 4000);
