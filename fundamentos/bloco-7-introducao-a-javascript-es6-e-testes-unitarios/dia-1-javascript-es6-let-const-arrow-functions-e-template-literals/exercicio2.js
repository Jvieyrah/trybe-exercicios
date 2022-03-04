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

const somaArrayPares = array => {
let result= 0;
for (let numero of array){
    result+= numero %2 === 0? numero: 0; 
        console.log(result);
   }

return result;
} 

console.log(somaArrayPares([3,3,3]));