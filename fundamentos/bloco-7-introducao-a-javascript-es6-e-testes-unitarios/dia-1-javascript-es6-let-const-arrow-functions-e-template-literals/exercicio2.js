// const factorial = number => {
//     let result = 1;

//     for (let index = 2; index <= number; index += 1) {
//         result *= index;
//                    }

//     return result;
// }

// console.log(factorial(4));

// const longestWord = text  => {
//     let wordArray = text.split(" ");
//     let maxLength = 0;
//     let result = "";
    
//     for (const word of wordArray){
// if (word.length > maxLength) {
// maxLength= word.length;
// result=word
// console.log (result);
// }
//     }
//     return result;
// }
  

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu com ele"));

// const isEven = n => n%2 ===0; 
// console.log(isEven(2+4));

// const somaArrayPares = array => {
// let result= 0;
// for (let numero of array){
//     result+= numero %2 === 0? numero: 0; 
//         console.log(result);
//    }

// return result;
// } 

// console.log(somaArrayPares([3,3,3]));
// const sum = (value1, value2) =>  {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//         throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
// }
// console.log(sum(2, "3"));

// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//   };
  
//   const sum = (value1, value2) => {
//     try {
//       verifyIsNumber(value1, value2);
//       return value1 + value2;
//     } catch (error) {
//       throw error.message;
//     }
//   };
  
//   console.log(sum(2, '3'));

// function criaObjeto (obje , chave, valor){
//     let newKey = chave;
//     const chave = valor;
// obje[newKey]= valor;

// const result = `${obje} `

// chave = valor;
// // let objeto = {chave = valor};

// return obje.chave;
// }

// console.log(criaObjeto("cliente", "nome", "josé"));

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

//   console.log(Object.values(coolestTvShow));

// //   for (const property in coolestTvShow) {
// //     console.log(property);
// //   }
// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };

//   const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//       skills.push(student[skill]);
//       console.log(student[skill]);
//     }
  
//     return skills;
//   }
//     console.log(listSkillsValuesWithFor(student1));
//     const listSkillsValuesWithValues = (student) => Object.values(student);
//     console.log(listSkillsValuesWithValues(student1));
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };
  
//   const listSkills = (student) => {
//     const arrayOfSkills = Object.keys(student);
//     for (const index in arrayOfSkills) {
//       console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//     }
//   };
  
//   console.log('Estudante 1');
//   listSkills(student1);
  
//   console.log('Estudante 2');

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);
  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };