// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

    for(index=0; index < numbers.length; index++){
    console.log( "resultado do exercicio 1: " + numbers[index]) ;
    }

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let resultado = 0
    for(index=0; index < numbers.length; index++){
   resultado = resultado + (numbers[index]); 
        }
        console.log  ( "resultado do exercicio 2 (soma): " + resultado);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = 0
    for(index=0; index < numbers.length; index++){
   resultado = resultado + (numbers[index]); 
   media = resultado / numbers.length;
        }
        console.log  ( "resultado do exercicio 3 (média): " + media);
    
/*Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"; */

if (media > 20){

    console.log  ("Exercicio 4: valor maior que 20") ;

} else {
    console.log  ("Exercicio 4: valor menor ou igual a 20") ;

}
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
var maior = 0
for(index=0; index < numbers.length; index++){
    if ( numbers[index] > maior ) {
        maior = numbers[index];
     }  
  }
  console.log( "Exercicio 5 - o maior numero do array é " +maior);

  
   
  /* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

 let impar =0;
for(index=0; index < numbers.length; index++){
    if (numbers[index] % 2 != 0 ) {
        impar = impar + 1 ;
     }  
  }

  if (impar == 0) {
console.log("Exercicio 6 - nenhum valor ímpar encontrado");
  }
  else {
    console.log("Exercicio 6 - Foram encontrados "+ impar + " valores ímpares");
  }

  console.log( impar);

/* Utilizando for , descubra qual o menor valor contido no array e imprima-o; */

var  menor = 1;
for(index=0; index < numbers.length; index++){
    if (numbers[index] < menor && menor > 1 ) {
          menor = (numbers[index]);
            }  
           
  }  console.log( "Exercicio 7 - o menor numero do array é " + menor);

  /* Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;*/

let ate25 = []
  for(index=0; index < 25; index++){
      ate25.push( ate25.length +1);
     }
    console.log(ate25);

     /* Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .*/

let div2 = []
    for(index=0; index < ate25.length; index++){
   div2 = (ate25[index]/ 2); 
   console.log  ( "resultado do exercicio : " + div2);
        }
        



 


   
   
   