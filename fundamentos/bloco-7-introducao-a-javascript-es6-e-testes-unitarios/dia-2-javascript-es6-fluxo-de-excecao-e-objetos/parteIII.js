const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };

  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };



  //  const addNewKey = (newObject, newKey, newValue) => {
  //    newObject[newKey] = newValue; 
  //      }
   
  
  //   addNewKey (lesson2, 'turno', 'noite' );
  //   console.log(lesson2);

  //   const listKeys = (object) => {
  //     console.log(Object.keys(object)); 
  //       }
 
  //   listKeys(lesson3);

  //   const objectSize = (object) => {
  //     const size =Object.keys(object);
  //     console.log(size.length); 
  //       }

  //   objectSize(lesson1);

  
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  // console.log(allLessons); 



//   const totalStudents = (objeto) => {
//     let total= 0;
//    const check = Object.keys(objeto);
//       // for (let index=0; check.length > index; index++){
//       for (index in check) {
//          total += objeto[check[index]].numeroEstudantes;
           
//     }   
//     return total; 
//   }
//    console.log(totalStudents(allLessons));

//    const getValueByNumber = (obj,number) => Object.values(obj)[number];
//    console.log(getValueByNumber(allLessons, 0));

   

//    const verifyPair = (obj ,k , v) => {
//    const array = Object.entries(obj);
//    let isEqual = false; 
//    for(let index in array){
//     if (array[index][0] === k && array[index][1] === v) isEqual = true;
//    }
//    return isEqual;  
//   }

//    console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false


const createReport = (objeto, prof) => {
  let professor = {Professor: prof}
  let listClasses= [];
  let aulas = {aulas: listClasses}
  let totalEstudantes= 0;

 const check = Object.keys(objeto);
     for (index in check) {
       if (objeto[check[index]].professor === prof){
      totalEstudantes += objeto[check[index]].numeroEstudantes;
      
      listClasses.push(objeto[check[index]].materia);
            }}   
    let estudantes ={Estudantes: totalEstudantes}
    const report = Object.assign({}, professor, aulas, estudantes); 
  return report;  
}

console.log(createReport(allLessons, 'Carlos'))