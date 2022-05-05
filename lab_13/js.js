//Task 1
let arr = [7, "string", true, null];
console.log("Array length => ", arr.length);

arr[4] = Number(prompt("Enter the number"));
console.log("The fifth element => ", arr[4]);

arr.shift();
console.log("Array => ", arr);

//Task 2
var cities = ["Ternopil", "Lviv", "Warsaw"];
console.log(cities.join("*"));

//Task 3
var dob1 = 1;
var dob2 = 1;
let arr1 = [2, 3, 4, 5];

for (var index in arr1)
    dob1 *= arr1[index];

while (arr1.length > 0)
    dob2 *= arr1.pop();

console.log("For => ", dob1);
console.log("While => ", dob2);

//Task 4
let arr2 = [];
console.log("Sample Output:");
for (let index = 0; index <= 15; index++) {
    arr2[index] = index;
    if (arr2[index] % 2 === 0)
        console.log("Numeric " + arr2[index] + " is even");
    else
        console.log("Numeric " + arr2[index] + " is odd");
}

//Task 5
function randArray(k) {
    let arr3 = [];
    for (let i = 0; i < k; i++)
        arr3[i] = Math.floor(Math.random() * 500) + 1;
    return arr3;
}
console.log("Randomized array => " + randArray(5));

//Task 6
function raiseToDegree(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        alert("Transferred parameters in the function raiseToDegree(" + a + ", " + b + ") are not integers");
        return undefined;
    } else return a ** b;
}
let a = Number(prompt("Enter two numbers to raise to the power, first:"));
let b = Number(prompt("Enter two numbers to raise to the power, second:"));
console.log("Exaltation to the degree => " + raiseToDegree(a, b));

//Task 7
function findMin(...args) {
    return Math.min(...args);
}
console.log("findMin => " + findMin(12, 14, 4, -4, 0.2))

//Task 8
function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j])
                return false;
        }
    }
    return true;
}
console.log("findUnique([1, 2, 3, 5, 3]) => " + findUnique([1, 2, 3, 5, 3]));
console.log("findUnique([1, 2, 3, 5, 11]) => " + findUnique([1, 2, 3, 5, 11]));

//Task 9
function lastElem(arr, x) {
    if (x === undefined)
        x = 1;
    while (arr.length > x)
        arr.shift();
    return arr;
}

console.log("lastElem([3, 4, 10, -5])) => [" + lastElem([3, 4, 10, -5]) + "]"); // -5
console.log("lastElem([3, 4, 10, -5], 2)) => [" + lastElem([3, 4, 10, -5], 2) + "]"); // [10, -5]
console.log("lastElem([3, 4, 10, -5], 8)) => [" + lastElem([3, 4, 10, -5], 8) + "]"); // [3, 4, 10, -5]

//Task 10
function bigLetter(str) {
    let arr = str.split(" ") ;
	for (let i in arr) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}
	return arr.join(" ");
}

let entered = prompt("Enter the ribbon");
console.log("bigLetter(" + entered + ") => " + bigLetter(entered));