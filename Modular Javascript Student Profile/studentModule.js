export const studentDetails = {
    name: "Shadrach Vincent Dela Cruz",
    program: "Bachelor of Science in Information Technology",
    yearLevel: 2,
    schoolYear: "2026-2027",
};

export function printSummary(student, status) {
    return `Student Name: ${student.name} | ID: ${status.id} | Program: ${student.program} | Status: ${status}`;
}