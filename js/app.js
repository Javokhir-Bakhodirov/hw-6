// 1-misol

// let num = prompt("son kiriting");
// let length = prompt("Uzunlikni kiriting");
// let arr = [];

// for (let i = 0; i < length; i++) {
// 	arr.push(Number(num ** (i + 1)));
// }

// console.log(arr);

// 2- misol

// let n = prompt("2 dan katta son kiriting");
// let A = prompt("Son kiriting");
// let B = prompt("Son kiriting");
// let arr = [];
// let sum = 0;

// function Numbers(n, A, B, arr, sum) {
// 	for (let i = 2; i < n; i++) {
// 		arr[0] = Number(A);
// 		let sum = 0;
// 		arr[1] = Number(B);
// 		for (let j = 0; j < i; j++) {
// 			sum = sum + arr[j];
// 		}
// 		arr[i] = sum;
// 	}
// 	return console.log(arr);
// }

// Numbers(n, A, B, arr, sum);

// 3- misol

// let arr = [1, 2, 3, 4, 5, 6];

// function arrReverse(arr) {
// 	return console.log(arr.reverse());
// }

// arrReverse(arr);

// 4- misol

// let sonlar = [2, 5, 7, 9, 8];

// for (let i = 0; i < sonlar.length; i++) {
// 	if (sonlar[i] % 2 === 1) {
// 		console.log(`Indeks: ${i}, Son: ${sonlar[i]}`);
// 	}
// }

// 5- misol

// let sonlar = [6,2, 5, 7, 9, 8];

// for (let i = 0; i < sonlar.length; i++) {
// 	if (sonlar[i] % 2 == 0) {
// 		console.log(`Indeks: ${i}, Son: ${sonlar[i]}`);
// 	}
// }

// 6- misol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function evenIndex(arr) {
// 	for (let i = 0; i < arr.length; i += 2) {
// 		console.log(arr[i]);
// 	}
// 	return;
// }

// evenIndex(arr);

// 7 -misol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arrReverse = arr.reverse();
// function oddIndex(arrReverse) {
// 	for (let i = 0; i < arrReverse.length; i += 2) {
// 		console.log(arr[i]);
// 	}
// 	return;
// }

// oddIndex(arrReverse);

// 8 -misol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function elIndex(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (i % 2 == 0) {
// 			console.log(`Juft-indeks: ${i}, Son: ${arr[i]}`);
// 		}
// 	}
// 	for (let i = 0; i < arr.length; i++) {
// 		if (i % 2 != 0) {
// 			console.log(`Toq-indeks: ${i}, Son: ${arr[i]}`);
// 		}
// 	}
// 	return;
// }

// elIndex(arr);

// 9 -misol

// let arr = [1, 2, 3, 4, 5];

// function elIndex(arr) {
// 	for (let i = 1; i < arr.length; i += 2 ) {
// 			console.log(arr[i]);
// 	}
//   let arrReverse = arr.reverse()
// 	for (let i = 0; i < arrReverse.length; i += 2 ) {
// 			console.log(arr[i]);
// 	}
// 	return;
// }

// elIndex(arr);

// 10 - misol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [];
// function numbers(arr, arr2) {
// 	for (let i = 0; i < arr.length; i += 3) {
// 		arr2.push(arr[i], arr[i + 1]);
// 	}

// 	for (let j = arr.length; j > 0; j = j - 3) {
// 		arr2.push(arr[j - 1], arr[j - 2]);
// 	}
// 	return console.log(arr2);
// }

// numbers(arr, arr2);

// 11- misol

// let arr = [1, 3, 2, 4, 5, 6, 7, 9];
// let L = 6;
// let K = 2;

// function arrList(arr) {
// 	let kIndex = arr.indexOf(K);
// 	let lIndex = arr.indexOf(L);

// 	let arrSliced = arr.slice(kIndex, lIndex);
//   let sum = 0
//   for (let i = 1; i < arrSliced.length; i++) {
//     sum +=arrSliced[i]
//   }
// 	return console.log(sum);
// }

// arrList(arr);

// 12 - misol

// let arr = [10, false, "Salom", null];
// let truth = [];
// let falsy = [];

// function arrList(arr, truth, falsy) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i]) {
// 			truth.push(arr[i]);
// 		} else {
// 		falsy.push(arr[i]);
// 		}
// 	}
// 	console.log(truth);
// 	console.log(falsy);
// 	return;
// }
// arrList(arr, truth, falsy);

// 13 - misol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let oddArr = [];

// function arrList(arr, oddArr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr.indexOf(arr[i]) % 2 == 0) {
// 			oddArr.push(arr[i]);
// 		}
// 	}
// 	return console.log(Math.min(...oddArr));
// }

// arrList(arr, oddArr);

// 14- misol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let evenArr = [];

// function arrList(arr, evenArr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr.indexOf(arr[i]) % 2 != 0) {
// 			evenArr.push(arr[i]);
// 		}
// 	}
// 	return console.log(Math.max(...evenArr));
// }

// arrList(arr, evenArr);

// 15 - misol

// let arr = [12, 32, 43, 34, 54, 62];

// function arrList(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > arr[i - 1] && arr[i] > arr[+i + 1]) {
//       console.log(arr[i]);
// 		}
// 	}
//   return
// }

// arrList(arr)

// 16 - misol

// let arr = [12, 32, 43, 34, 54, 62];
// let R = prompt("son kiriting");

// function arrList(arr, R) {
// 	let num = arr[0];
// 	let minWay = R - arr[0];
// 	for (let i = 1; i < arr.length; i++) {
// 		let min = R - arr[i];
// 		if (min < minWay) {
// 			minWay = min;
// 			num = arr[i];
// 		}
// 	}
// 	return console.log(num);
// }

// arrList(arr, R);

// 17 -misol

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let arrPlus = [];

// function arrList(arr, arrPlus) {

// 	let maxNUmber = 0;
// 	for (let i = 0; i < arr.length; i ++) {
//     let max = arr[i] + arr[i + 1];
// 		arrPlus.push(arr[i] + arr[i + 1]);
// 		if (max > maxNUmber) {
// 			maxNUmber = max;
// 		}

// 	}
//   console.log(max)
// 	return console.log(arr[i], arr[i + 1]);
// }
// arrList(arr, arrPlus);
