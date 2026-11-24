function createStudentProfile(name, id, program, yearLevel, schoolYear) {
    return {
        name: name,
        id: id,
        program: program,
        yearLevel: yearLevel,
        schoolYear: schoolYear.createStudentProfile,
    };
}

const myProfile = createStudentProfile(
    "Shadrach Vincent Dela Cruz", 
    "2026-6753", 
    "Bachelor of Science in Information Technology",
    2, 
    "2026-2027"
);

console.log(myProfile);