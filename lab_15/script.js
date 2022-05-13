//Task 1
function propsCount(currentObject) {
    let length = 0;
    for (const key in currentObject) {
        length++;
    }
    return length;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

console.log(propsCount(mentor));
console.log("\n");

//Task 2
function showProps(obj) {
    for (const key in obj) {
        console.log(key + ": " + obj[key]);
    }
}

let movie = {
    movieTitle: "Call Me By Your Name",
    genre: "Romantic drama",
    yearOfIssue: 2017,
    director: "Luca Guadagnino",
    evaluationOfSpectators: "91%"
};

showProps(movie);
console.log("\n");

//Task 3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return this.name + " " + this.surname;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        return super.showFullName() + " " + midleName;
    }

    showCourse() {
        return new Date().getFullYear() - this.year;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
console.log("\n");

//Task 4
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary() {
        return `${this.dayRate * this.workingDays} UAH`;
    }

    #experience = 1.2;
    showSalaryWithExperience() {
        return `${this.dayRate * this.workingDays * this.#experience} UAH`;
    }

    set setExp(newExp) {
        this.#experience = newExp;
    }

    get getExp() {
        return this.#experience;
    }
}

function sortArr(workers) {
    workers.sort(function(a, b) {
        return a.getExp - b.getExp;
    });
    for (const worker of workers) {
        console.log(`${worker.fullName} salary: ${worker.showSalaryWithExperience()} (experience: ${worker.getExp})`);
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
let worker2 = new Worker("Tom Tomson", 48, 22);
let worker3 = new Worker("Andy Ander", 29, 23);

console.log(`${worker1.fullName} salary: ${worker1.showSalary()}`);
console.log(`${worker1.fullName} salary with experience: ${worker1.showSalaryWithExperience()} \n(experience: ${worker2.getExp})`);

worker1.setExp = 1.5;
worker2.setExp = 3;

console.log(`${worker1.fullName} new salary with experience: ${worker1.showSalaryWithExperience()} \n(new experience: ${worker1.getExp})`);

sortArr([worker1, worker2, worker3]);
console.log("\n");

//Task 5
class GeometricFigure {
    getArea() {
        return 0;
    };

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    };
}

class Triangle extends GeometricFigure {
    constructor(a, b, c) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }
}

class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }

    getArea() {
        return this.a * this.a;
    }
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }

    getArea() {
        return this.r * this.r * Math.PI;
    }
}

function handleFigures(figures) {
    figures.filter(checkClass).forEach(myFunction);

    function checkClass(figure) {
        return figure instanceof GeometricFigure;
    }
    
    function myFunction(figure) { 
        console.log(`Geometric figure: ${figure.toString()} - area: ${figure.getArea()}`);
    }

    function getSum(total, figure) {
        return Math.round(figure.getArea()) + total;
    }

    return `Total area: ${figures.reduce(getSum, 0)}`;
}

const figures = [new Triangle(5, 5, 6), new Square(7), new Circle(5)];
console.log(handleFigures(figures));