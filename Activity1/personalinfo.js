const studentInfo = {
    name: "Shadrach Vincent Dela Cruz",
    id: "2026-6753",
    yearLevel: 2,
    program: "Bachelor of Science in Information Technology"
}

const courses = [
    {
        course: "Networking1",
        grade: 99
    },
    {
        course: "Application Development",
        grade: 96
    },
    {
        course: "Event-Driven Programming",
        grade: 98
    },
    {
        course: "Integrative Programming",
        grade: 99
    },
    {
        course: "Pathfit 4",
        grade: 100
    },
    {
        course: "Arts Appreciation",
        grade: 95
    }
]

const courseEnrolled = courses.length;

let totalGrade = 0;

for (let i = 0; i < courses.length; i++) {
    totalGrade += courses[i].grade;
}

const averageGrade = totalGrade / courses.length;

let letterGrade = "";
if (averageGrade >= 98) {
    letterGrade = "A";
} else if (averageGrade >= 94) {
    letterGrade = "A-";
} else if (averageGrade >= 90) {
    letterGrade = "B+";
} else if (averageGrade >= 87) {
    letterGrade = "B";
} else if (averageGrade >= 83) {   
    letterGrade = "B-";
} else if (averageGrade >= 80) {
    letterGrade = "C+";
} else if (averageGrade >= 77) {
    letterGrade = "C";
} else if (averageGrade >= 73) {
    letterGrade = "D";
} else {
    letterGrade = "F";
}

console.log("Student Information:");
console.log("Student Name: " + studentInfo.name);
console.log("Student ID: " + studentInfo.id);
console.log("Program: " + studentInfo.program);
console.log("Year Level: " + studentInfo.yearLevel);

console.log("\nCourses Enrolled:");
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i].course);
}
console.log("Total Courses Enrolled: " + courseEnrolled);

console.log("\nGrades:");
console.log("General Weighted Average: " + averageGrade);
console.log("Letter Grade: " + letterGrade);