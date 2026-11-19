
const bsit_students = {
    Student1: {
        name: "Shadrach Vincent Dela Cruz",
        id: "2026-6753",
        yearLevel: 2,
        program: "Bachelor of Science in Information Technology",
        courseEnrolled: {
            c1: { course: "Networking 1", units: 3, grade: 99 },
            c2: { course: "Application Development", units: 3, grade: 96 },
            c3: { course: "Event-Driven Programming", units: 3, grade: 98 },
            c4: { course: "Integrative Programming", units: 3, grade: 99 },
            c5: { course: "Pathfit 4", units: 2, grade: 100 },
            c6: { course: "Arts Appreciation", units: 3, grade: 95 },
            c7: { course: "Science Technology & Society", units: 3, grade: 95 }
        }
    },

    Student2: {
        name: "Margarrete Bier",
        id: "2026-6749",
        yearLevel: 2,
        program: "Bachelor of Science in Information Technology",
        courseEnrolled: {
            c1: { course: "Networking 1", units: 3, grade: 99 },
            c2: { course: "Application Development", units: 3, grade: 96 },
            c3: { course: "Event-Driven Programming", units: 3, grade: 98 },
            c4: { course: "Integrative Programming", units: 3, grade: 99 },
            c5: { course: "Pathfit 4", units: 2, grade: 100 },
            c6: { course: "Arts Appreciation", units: 3, grade: 95 },
            c7: { course: "Science Technology & Society", units: 3, grade: 95 }
        }
    },

    Student3: {
        name: "Richelle Baniago",
        id: "2026-6753",
        yearLevel: 2,
        program: "Bachelor of Science in Information Technology",
        courseEnrolled: {
            c1: { course: "Networking 1", units: 3, grade: 99 },
            c2: { course: "Application Development", units: 3, grade: 96 },
            c3: { course: "Event-Driven Programming", units: 3, grade: 98 },
            c4: { course: "Integrative Programming", units: 3, grade: 99 },
            c5: { course: "Pathfit 4", units: 2, grade: 100 },
            c6: { course: "Arts Appreciation", units: 3, grade: 95 },
            c7: { course: "Science Technology & Society", units: 3, grade: 95 }
        }
    },

    Student4: {
        name: "Prince Joseph Galvadores",
        id: "2026-6753",
        yearLevel: 2,
        program: "Bachelor of Science in Information Technology",
        courseEnrolled: {
            c1: { course: "Networking 1", units: 3, grade: 99 },
            c2: { course: "Application Development", units: 3, grade: 96 },
            c3: { course: "Event-Driven Programming", units: 3, grade: 99 },
            c4: { course: "Integrative Programming", units: 3, grade: 99 },
            c5: { course: "Pathfit 4", units: 2, grade: 100 },
            c6: { course: "Arts Appreciation", units: 3, grade: 95 },
            c7: { course: "Science Technology & Society", units: 3, grade: 95 }
        }
    }
};

const Student1 = bsit_students.Student1;
const Student2 = bsit_students.Student2;
const Student3 = bsit_students.Student3;
const Student4 = bsit_students.Student4;

const courses = Student1.courseEnrolled;

const c1 = courses.c1;
const c2 = courses.c2;
const c3 = courses.c3;
const c4 = courses.c4;
const c5 = courses.c5;
const c6 = courses.c6;
const c7 = courses.c7;

let totalUnits =
    c1.units + c2.units + c3.units +
    c4.units + c5.units + c6.units + c7.units;

const totalCourses = 7;

let totalGrade =
    (c1.grade * c1.units) +
    (c2.grade * c2.units) +
    (c3.grade * c3.units) +
    (c4.grade * c4.units) +
    (c5.grade * c5.units) +
    (c6.grade * c6.units) +
    (c7.grade * c7.units);

let averageGrade = totalGrade / totalUnits;

let letterGrade = "";

if (averageGrade >= 98 && averageGrade <= 100) {
    letterGrade = "A";
} else if (averageGrade >= 94 && averageGrade < 98) {
    letterGrade = "A-";
} else if (averageGrade >= 90 && averageGrade < 94) {
    letterGrade = "B+";
} else if (averageGrade >= 86 && averageGrade < 90) {
    letterGrade = "B";
} else if (averageGrade >= 83 && averageGrade < 86) {
    letterGrade = "B-";
} else if (averageGrade >= 80 && averageGrade < 83) {
    letterGrade = "C+";
} else if (averageGrade >= 77 && averageGrade < 80) {
    letterGrade = "C";
} else if (averageGrade >= 73 && averageGrade < 77) {
    letterGrade = "D";
} else if (averageGrade >= 0 && averageGrade < 73) {
    letterGrade = "F";
} else {
    letterGrade = "Invalid Grade";
}

console.log("\n======Student Information 1======");
console.log("Student Name: " + Student1.name);
console.log("Student ID: " + Student1.id);
console.log("Year Level: " + Student1.yearLevel);
console.log("Program: " + Student1.program);

console.log("\n======Student Information 2======");
console.log("Student Name: " + Student2.name);
console.log("Student ID: " + Student2.id);
console.log("Year Level: " + Student2.yearLevel);
console.log("Program: " + Student2.program);

console.log("\n======Student Information 3======");
console.log("Student Name: " + Student3.name);
console.log("Student ID: " + Student3.id);
console.log("Year Level: " + Student3.yearLevel);
console.log("Program: " + Student3.program);

console.log("\n======Student Information 4======");
console.log("Student Name: " + Student4.name);
console.log("Student ID: " + Student4.id);
console.log("Year Level: " + Student4.yearLevel);
console.log("Program: " + Student4.program);

console.log("\n======Grades and Units======");
console.log(c1.course + " - Grade: " + c1.grade + " - Units: " + c1.units);
console.log(c2.course + " - Grade: " + c2.grade + " - Units: " + c2.units);
console.log(c3.course + " - Grade: " + c3.grade + " - Units: " + c3.units);
console.log(c4.course + " - Grade: " + c4.grade + " - Units: " + c4.units);
console.log(c5.course + " - Grade: " + c5.grade + " - Units: " + c5.units);
console.log(c6.course + " - Grade: " + c6.grade + " - Units: " + c6.units);
console.log(c7.course + " - Grade: " + c7.grade + " - Units: " + c7.units);

console.log("\n======Enrolled Courses======");
console.log("Total Courses Enrolled: " + totalCourses);
console.log("Total Units: " + totalUnits);

console.log("\n======General Average======");
console.log("General Weighted Average: " + averageGrade.toFixed(2));
console.log("Letter Grade: " + letterGrade);
