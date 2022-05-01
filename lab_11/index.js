//Task 2
console.log("Shozda");

//Task 3
let x = 1,
    y = 2;
document.write("<h1>", x, ", ", y, "</h1>");
x = y;
document.write("<h1>", x, ", ", y, "</h1>");

//Task 4
let object = {
    string: "Hasirati",
    int: 23,
    bool: false,
    undef: undefined,
    nul: null
}

//Task 5
let isAdult = confirm("Are you 18 years old?");
console.log(isAdult);

//Task 6
let yourName = "Yuliia";
let yourSurname = "Shozda";
let yourGroup = "CS-321";
let yourBirthYear = 2004;
let isMarried = false;

console.log(yourBirthYear);
console.log(isMarried);
console.log(yourSurname);
console.log(yourName);
console.log(yourGroup);

let zero = null;
let unexplained = undefined;

console.log(zero);
console.log(unexplained);

//Task 7
let login = prompt("Enter login");
let email = prompt("Enter email");
let password = prompt("Enter password");

alert("Dear " + login + ", your email is " + email + ", your password is " + password);

//Task 8
let secondsPerHour = 60 * 60;
let secondsPerDay = secondsPerHour * 24;
let secondsPerMonth = secondsPerDay * 30;

alert("Seconds per hour: " + secondsPerHour + "\n" + "Seconds per day: " + secondsPerDay + "\n" + "Seconds per month: " + secondsPerMonth);