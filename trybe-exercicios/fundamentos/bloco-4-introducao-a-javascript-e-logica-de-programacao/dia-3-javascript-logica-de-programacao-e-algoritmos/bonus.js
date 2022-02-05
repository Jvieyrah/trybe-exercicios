
/*1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:*/
n = 5
let asteriscos=[];
let asteriscos2=[];

for ( index =0;  index < n;  index++){
asteriscos="* * * * *";
console.log(asteriscos);
}


let symbol = '*';
let inputLine = ' ';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;

};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    console.log(inputLine);

}

let size = 5;


for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
};



// // 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// for ( index2 =0;  index2 < n;  index2++){
//     asteriscos2[index2] = "*");
//     console.log(asteriscos2);
// }   


// // 3- Agora inverta o lado do triângulo. Por exemplo:


let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
     }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};


// for ( index2 =0;  index2 < n;  index--){
//     asteriscos2[index2] = " ");
//     console.log(asteriscos2);
// }   
// // 4- Depois, faça uma pirâmide com n asteriscos de base:

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};



// /* looping para criar array com todos os nros */



// // 6- Faça um programa que diz se um número definido numa variável é primo ou não.

// for (let index=50; index > 2;  index--) {
//     if (index % 2 !=0 &&  index % 3 !=0 &&  index % 4 !=0 &&  index % 5 !=0 &&  index % 6 !=0 && index % 7 !=0 &&  index % 8 !=0&& index % 9 !=0){
// console.log(index + " é MAIOR numero primo ABAIXO DE 50");  
// index=0;             
//  }

// }