let superHero = ["SpiderMan", "IronMan", "Batman", "SuperMan", "Thor"];

console.log("Array before splice: ", superHero);

// replaces 1 element at index 4
superHero.splice(4, 1, "Hulk"); // item at index 4 is replaced
// superHero.splice(4, 0, "Hulk"); // no item is replaced
console.log("Array before splice: ", superHero);
