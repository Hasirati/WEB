//Task 1
let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = Boolean(x);
console.log(res3);
console.log(typeof res3);

let res4 = Number(Boolean(x) + String(y));
console.log(res4);
console.log(typeof res4);

//Task 2
let numeric = prompt("Enter the number");

console.log("Entered number - " + numeric);
if (numeric % 2 == 0) {
    console.log("Even number");
} else {
    console.log("The number is not even");
}

if (numeric % 7 == 0) {
    console.log("Multiply 7");
} else {
    console.log("The number is not a multiple of 7");
}

//Task 3
let isAdult = prompt("How old are you?") >= 18;
console.log(isAdult ? "You have reached the age of majority" : "You are still too young");

//Task 4
let first = Number(prompt("Enter the length of the first side of the triangle"));
let second = Number(prompt("Enter the length of the other side of the triangle"));
let third = Number(prompt("Enter the length of the third side of the triangle"));

if (isNaN(first) || isNaN(second) || isNaN(third)) {
    alert("You entered the sides of the triangle incorrectly")
} else if (first + second < third || first + third < second || second + third < first) {
    console.log("There is no triangle with such sides");
} else {
    let p = (first + second + third) / 2;
    console.log("Triangle area: " + Math.sqrt(p * (p - first) * (p - second) * (p - third)).toFixed(3));
    console.log((first ** 2 + second ** 2 === third ** 2 || first ** 2 + third ** 2 === second ** 2 ||
        second ** 2 + third ** 2 === first ** 2) ? "The triangle is right-angled" : "The triangle is not right-angled");
}

//Task 5
let hour = new Date().getHours();
if (hour >= 23 || hour < 5) {
    console.log("Good night");
} else if (hour >= 5 && hour < 11) {
    console.log("Good morning");
} else {
    console.log(hour >= 11 && hour < 17 ?
        "Good day" : "Good evening");
}