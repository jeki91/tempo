function findNextSquare(sq) {
	// Return the next square if sq is a perfect square, -1 otherwise
	//return -1;
	let x = Math.sqrt(sq);

	if ((x ^ 0) === x) {

		let result = (x + 1) * (x + 1);
		return result;

	} else {
		return -1;
	}
}


function findScreenHeight(width, ratio) {
	// Happy coding :)

	let num1 = +(ratio.split(':')[0]);



	let num2 = +(ratio.split(':')[1]);


	let result = width * num2 / num1;
	return (`${width}x${result}`);
}

function wqw(w) {
	let num1 = w.split('w')[2];
	console.log(num1);
}

function lifePathNumber(dateOfBirth) {
	// Your solution...
	let dateArr = dateOfBirth.split('-');
	console.log(dateArr);

	let lifenum = 0;
	let sumEl = [];
	for (let i = 0; i < dateArr.length; i++) {
		let splitArrEl = dateArr[i].split('');
		console.log(splitArrEl);
		let tempSum = 0;

		for (let k = 0; k < splitArrEl.length; k++) {
			tempSum += +splitArrEl[k];
		}

		console.log(tempSum);


		while (tempSum > 9) {
			console.log('больше');
			tempSum = `${tempSum}`;
			console.log(tempSum);

			let temp1 = tempSum.split('');
			console.log(temp1);
			tempSum = 0;
			for (let k = 0; k < temp1.length; k++) {
				tempSum += +temp1[k];
			}

			console.log(tempSum);
		}

		sumEl.push(tempSum);

	}
	console.log(sumEl);

	//for (let)
	//return lifenum;
}


snail = function (array) {

	let nArr = [];

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			nArr.push(array[i][j]);
		}
	}
	console.log(nArr);

	for (let i = 0, endI = nArr.length - 1; i < endI; i++) {
		let wasSwap = false;
		for (let j = 0, endJ = endI - i; j < endJ; j++) {
			if (nArr[j] > nArr[j + 1]) {
				[nArr[j], nArr[j + 1]] = [nArr[j + 1], nArr[j]];
				wasSwap = true;
			}
		}
		if (!wasSwap) break;
	} console.log(nArr);
}


function squareDigits(num) {
	//may the code be with you
	console.log(num);
	let a = String(num);
	console.log(a);
	let m = a.split('');
	console.log(m);

	let newA = [];
	for (let i = 0; i < m.length; i++) {
		console.log(m[i]);
		newA.push(m[i] * m[i]);
	}
	return (newA.join(''));

}