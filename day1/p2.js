let fs = require("fs");

const massList = fs.readFileSync("./p2.input.txt", "utf-8");
const massArray = massList.split("\n")

let total = [];
let result = [];

fuel = (massArray) => {
	
	for (let i = 0; i < massArray.length; i++) {
		fuelRecurssion(massArray[i])
	}
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	let newFuel = total.reduce(reducer);
	result.push(newFuel);
	console.log(result);
}

fuelRecurssion = (mass) => {
	module = Math.floor(mass / 3)-2;
	if (module > 0) {
		total.push(module)
		fuelRecurssion(module)
	}
}

fuel(massArray)