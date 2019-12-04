let total = [];

fuelRecurssion = (mass) => {
	
	module = Math.floor(mass / 3)-2;
	if (module > 0) {
		console.log(module);
		total.push(module)
		fuelRecurssion(module)
	}
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	
	console.log(total.reduce(reducer));
}

fuelRecurssion(100756);