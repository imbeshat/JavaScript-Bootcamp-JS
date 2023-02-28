const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
	return window.getComputedStyle(selectedElement).backgroundColor;
};

// mouseenter evenlistener
const magicColorChanger = (element, color) => {
	return element.addEventListener("mouseenter", () => {
		center.style.background = color;
	});
};

// mouseleave eventlistener
const magicDefaultColor = (element) => {
	element.addEventListener("mouseleave", () => {
		center.style.background = "rgb(66, 66, 66)";
	});
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(pink, getBGColor(pink));

magicDefaultColor(red);
magicDefaultColor(orange);
magicDefaultColor(pink);
magicDefaultColor(violet);
magicDefaultColor(cyan);
