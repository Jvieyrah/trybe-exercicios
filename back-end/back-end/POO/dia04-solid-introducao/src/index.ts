type Discipline = {
    name: string;
    grade: number;
    letterGrade?: string;
  };

  type Student = {
    name: string;
    disciplines: Discipline[];
  };

/* Apoio para a função `getGradeLetter` */
const GRADE_DICT = {
  numbers: [0.9, 0.8, 0.7, 0.6, 0.1],
  letters: ['A', 'B', 'C', 'D', 'E'],
};

/* Função menor para remover o uso excessivo de `if{}else`s */
const getGradeLetter = (gradeNumber: number): string => {
  const gradeNumbers = GRADE_DICT.numbers;
  const gradeLetters = GRADE_DICT.letters;
  for (let i = 0; i < gradeNumbers.length; i += 1) {
    if (gradeNumber >= gradeNumbers[i]) return gradeLetters[i];
  }
  return 'F';
};

/* Coletar notas */
const getLetterGrades = (discipline: Discipline): Discipline => ({
  ...discipline,
  letterGrade: getGradeLetter(discipline.grade),
});

  // /* "Converter" */

  const percentageGradesIntoLetters = (student: Student): Student => ({
    ...student,
    disciplines: student.disciplines.map(getLetterGrades),
  });

  // const percentageGradesIntoLetters = ({ name: studentName, disciplines }: Student):
  // { name: string, disciplines: Discipline[] } => ({
  //   name: studentName,
  //   disciplines: disciplines.map(({ name, grade }) => {
  //     let letterGrade;

  //     if (grade >= 0.90) letterGrade = 'A';
  //     else if (grade >= 0.80) letterGrade = 'B';
  //     else if (grade >= 0.70) letterGrade = 'C';
  //     else if (grade >= 0.60) letterGrade = 'D';
  //     else if (grade >= 0.10) letterGrade = 'E';
  //     else letterGrade = 'F';

  //     return { name, grade, letterGrade };
  //   }),
  // });

  /* "Determinar" */
  const approvedStudents = ({ disciplines }: Student): boolean => 
    disciplines.every(({ grade }) => grade >0.7,
    );
      
  /* "Atualizar" */

  const updateApprovalData = ({ name: studentName, disciplines }: Student): void => {
    console.log(`A pessoa com nome ${studentName} foi aprovada!`);
  
    disciplines.map(({ name, letterGrade }) =>
      console.log(`${name}: ${letterGrade}`));
  };

  function setApproved(students: Student[]): void {
    students
    .map(percentageGradesIntoLetters)
    .filter(approvedStudents)
    .map(updateApprovalData);
}

export {
  percentageGradesIntoLetters,
  approvedStudents,
  updateApprovalData,
  setApproved,
};
  
  /* Abaixo temos um exemplo de execução */
  const students = [
    {
      name: 'Lee',
      disciplines: [
        { name: 'matemática', grade: 0.8 },
        { name: 'história', grade: 0.6 },
      ],
    },
    {
      name: 'Clementine',
      disciplines: [
        { name: 'matemática', grade: 0.8 },
        { name: 'história', grade: 0.9 },
      ],
    },
  ];
  
  setApproved(students);