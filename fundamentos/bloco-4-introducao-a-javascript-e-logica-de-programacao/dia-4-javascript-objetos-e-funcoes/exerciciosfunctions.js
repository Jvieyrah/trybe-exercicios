// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

// function verificaPalindrome(word){
//     for(index in word){
       
//       if(word[index] != word[(word.length - 1) - index]){
//         return false;
//       }
//     }
//     return true;
//   }

//   function verificaPalindrome2(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   console.log(verificaPalindrome('arara'));
//   console.log(verificaPalindrome2('arara'));

  

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// Valor esperado no retorno da função: 4 .

// function arrayMaior (teste) {
//     let biggest= 0;

//  for(indice of teste){
  

// if (teste[biggest] < teste[indice]){
// biggest = indice; 
// }
// }
// return biggest;
// } 

// console.log(arrayMaior(([2, 3, 6, 7, 10, 1]));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

// function indiceDoMenor(numeros) {
//     let indiceMenor = 0;
//     for (let indice in numeros) {
//       if (numeros[indiceMenor] > numeros[indice]) {
//         indiceMenor = indice;
//       }
//     }
//     return indiceMenor;
//   }
  
//   console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6






// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

// function nomeMaior (nomes){
//     let maiorNome= nomes[0]
// for (let indice in nomes){
//     if(maiorNome.length < nomes[indice].length){
// maiorNome = nomes[indice]
//     }
//     } 
// return maiorNome;
// }

// console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .


// function maisRepetido(numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }
//   return numeros[indexNumeroRepetido];
// }
//if que dá push no contador


// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3, ]));
// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

// function somaTodosNumeros(numeros){
// let total=0;

// for (index =0; index <= numeros; index++ ){
// total= total+index;
// }
// return total; 
// }
// console.log(somaTodosNumeros(5));

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// function verificaFimPalavra(palavra, fimPalavra) {
//   let inversoPalavra = palavra.split('').reverse().join('');
//   let inversoFimPalavra = fimPalavra.split('').reverse().join('');
//   let result;

//   for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//     if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//       result = false;
//       break;
//     } else {
//       result = true;
//     }
//   }
  
//   return result;
// }

// console.log(verificaFimPalavra('trybe', 'be')); //true
// console.log(verificaFimPalavra('joaofernando', 'fernan')); //false




// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false


// const numerosRomanos = {
//   i: 1,
//   v: 5,
//   x: 10,
//   l: 50,
//   c: 100,
//   d: 500,
//   m: 1000,
// };

// function romanoParaDecimal(numero) {
//   numero = numero.toLowerCase();
//   const len = numero.length;
//   let soma = numerosRomanos[numero[len - 1]];
//   let atual = numerosRomanos[numero[len - 1]];
//   for (let i = 2; i <= len; i += 1) {

//     const prox = numerosRomanos[numero[len - i]];
//     if (atual <= prox) {
//       soma += prox;
//     } else {
//       soma -= prox;
//     }
//     atual = prox;
//   }
//   return soma;

// }
// console.log(romanoParaDecimal('MMXVIII')); // 2018
// console.log(romanoParaDecimal('VI')); // 6
// console.log(romanoParaDecimal('IV')); // 4


// const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

// function arrayOfNumbers(vector) {
//   const result = [];
//   for (let index = 0; index < vector.length; index += 1) {
//     const numbers = vector[index];
    
//     // for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
//     //   const current = numbers[indexSub];???
//       if ((nunbers % 2) === 0) {
//         result.push(numbers);
//       } 
//     }
 
//   return result;
// }


// console.log(arrayOfNumbers(vector));

// const basket = [
//   'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//   'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//   'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//   'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//   'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//   'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//   'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//   'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//   'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//   'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//   'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//   'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//   'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//   'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//   'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//   'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//   'Banana', 'Pera', 'Abacate', 'Uva',
// ];

// const result = {};
// for (let index = 0; index < basket.length; index += 1) {
//   const fruit = basket[index];
//   if (!result[fruit]) result[fruit] = 0;
//   result[fruit] += 1;
// }

// const summaries = [];
// for (fruit in result) {
//   let message = `${result[fruit]} ${fruit}`;
//   if (result[fruit] > 1) message += 's';
//   summaries.push(message);
// }
// console.log(`Sua cesta possui: ${summaries.join(', ')}.`);

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let moradoresBlocoDois = moradores.blocoDois;
let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

// Duas formas de se resolver
console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois['nome'] + ' ' + ultimoMoradorBlocoDois['sobrenome'] + ' mora no ' + ultimoMoradorBlocoDois['andar'] + '° andar, apartamento ' + ultimoMoradorBlocoDois['apartamento']);

for (let index = 0; index < moradores.blocoUm.length; index += 1) {
  console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
}

for (let index = 0; index < moradores.blocoDois.length; index++) {
  console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
}