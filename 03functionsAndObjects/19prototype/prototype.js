let myHeros = ["thor", "spiderman"];
let dcHeros = ["batman", "black adam", "superman"];

let heropower = {
	thor: "hammer",
	spiderman: "sling",

	getSpiderPower: function () {
		console.log(`Spidy power is ${this.spiderman}`);
	},
};

Object.prototype.hitesh = function () {
	console.log(`Hitesh is peresent in all objects`);
};

Array.prototype.heyHitesh = function () {
	console.log(`Hitesh says hello`);
};

myHeros.hitesh();

//inheritance

const User = {
	name: "top name",
	email: "topuser@gmail.com",
};

const Teacher = {
	makeVideos: true,
};

const TeachingSupport = {
	isAvailable: false,
};

const TSAssistant = {
	makeAssignment: "JS assigment",
	fullTime: true,
	__proto__: TeachingSupport, // old way of doing this
};

Teacher.__proto__ = User; // it is also old code base syntax
Teacher.email; // now we can access Teacher.email here

Object.setPrototypeOf(TeachingSupport, Teacher); // modern syntax

// Goal: get truelength of string

let yourname = "spidey   ";

String.prototype.truelength = function () {
	//console.log(`${this.name}`);
	console.log(`true length is: ${this.trim().length}`); //this keyword will give the context, the access of where it is running, on variable or directly on the string
};

// this always targets to whoever is calling it. Eg- in yourname.truelength() this will target to yourname
