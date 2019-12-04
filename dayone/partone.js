let fs = require("fs");

const massList = fs.readFileSync("./partone.input.txt", "utf-8");
const massArray = massList.split("\n")

const totalFuel = (massArray) => {

	let arr = [];

	for (let i = 0; i < massArray.length; i++) {
		module = Math.floor(massArray[i] / 3)-2;
		arr.push(module)
	}
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	console.log(arr.reduce(reducer));
}

totalFuel(massArray);