//Task 1
function calcRectangleArea(width, height) {
    try {
        if (typeof width !== "number" || typeof height !== "number") {
            throw new Error("Incorrect data type");
        } else
            return width * height;
    } catch (error) {
        return error.message;
    }
}
console.log("Square =>", calcRectangleArea(5, 3));
console.log("Square =>", calcRectangleArea("f", 3));

//Task 2
function checkAge() {
    let age = prompt("Enter your age:");
    try {
        if (age === "") {
            throw new Error("The field is empty! Please enter your age");
        } else if (isNaN(age)) {
            throw new Error("Incorrect data type");
        } else if (age < 14) {
            throw new Error("You just a baby...");
        } else
            return "Enjoy";
    } catch (error) {
        return error.message;
    }
}
console.log(checkAge());
console.log(checkAge());
console.log(checkAge());
console.log(checkAge());

//Task 3
function showUser(id) {
    if (id < 0) {
        throw new Error("ID must not be negative: ");
    }
    return "{id: " + id + "}";
}

function showUsers(ids) {
    let emptyObj = [];
    for (const id of ids) {
        try {
            emptyObj.push(showUser(id));
        } catch (error) {
            console.log(error.name + ":" + error.message + id);
        }
    }
    return emptyObj;
}
console.log("showUsers([7, -12, 44, 22])");
console.log(showUsers([7, -12, 44, 22]));

//Task 4
class MonthException {
    constructor(message) {
        this.name = "MonthException";
        this.message = message;
    }
}

function showMonthName(month) {
	switch (month) {
		case 1:
			return "January";
		case 2:
			return "February";
		case 3:
			return "March";
		case 4:
			return "April";
		case 5:
			return "May";
		case 6:
			return "June";
		case 7:
			return "July";
		case 8:
			return "August";
		case 9:
			return "September";
		case 10:
			return "October";
		case 11:
			return "November";
		case 12:
			return "December";
		default:
			throw new MonthException("Incorrect month number");
	}
}

try {
	console.log(showMonthName(5));
	console.log(showMonthName(14));
} catch (error) {
	console.log(error.name + ": " + error.message);
}