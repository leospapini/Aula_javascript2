const students = [
    {
        name: 'Josh',
        grade: 7
    },
    {
        name: 'Jennifer',
        grade: 10
    },
    {
        name: 'Bryan',
        grade: 4
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(students => students.grade >= 7);
}

console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));

// Muito útil para evitar que existam alterações indesejadas nos atributos