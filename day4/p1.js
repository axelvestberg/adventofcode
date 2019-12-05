const password = (lowest, limit) => {
	let current = lowest;
	let possible = [];

	checkValidity(current, limit, possible);

}

const checkValidity = (current, limit, possible) => {
	console.log('check if valid', current);
	let x = current.toString().split('');
	let digits = x.map(Number);
	let increasing, adjacent;
	if (current > limit) {
		console.log(current, 'larger than', limit);
		return;
	} else {
		console.log('current lower than', limit);
	}

	for (let i = 0; i < digits.length; i++) {
		// console.log('i;', i);
		if (digits[i+1] > digits[i]) {
			increasing = true;
			console.log('increasing', increasing, digits[i], digits[i+1]);
		} else if (digits[i+1] === digits[i]) {
			adjacent = true;
			console.log('adjacent', adjacent, digits[i], digits[i+1]);
		} else if (increasing && adjacent) {
			
			possible.push(current);
			console.log(possible);
		} else {
			console.log('not valid')
		}
	}
}

const incrementer = (current, limit, possible) => {
	let x = current.toString().split('');
	let digits = x.map(Number);
	if (digits[i+1] < digits[i]) {
		digits[i+1] = digits[i]
	}
}



password(145852, 616942);

/*
RULES:
Check if password is in range.
Check if number on the left is bigger than number on the right.
Check if any two adjacent numbers are equal.
Add that number to array of possible passwords.
Check if number.length-1 = 9
If number.length-2
Increment number.length-1 by 1.
Check if any two adjacent numbers are equal.
*/
