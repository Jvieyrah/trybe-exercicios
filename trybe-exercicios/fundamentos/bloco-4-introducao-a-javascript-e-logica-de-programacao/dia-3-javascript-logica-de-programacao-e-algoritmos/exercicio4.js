/* 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50. */

let nro = 50;

/* looping para criar array com todos os nros */

for (let index=50; index > 2;  index--) {
           if (index % 2 !=0 &&  index % 3 !=0 &&  index % 4 !=0 &&  index % 5 !=0 &&  index % 6 !=0 && index % 7 !=0 &&  index % 8 !=0&& index % 9 !=0){
      console.log(index + " é MAIOR numero primo ABAIXO DE 50");  
      index=0;             
        }
     
   }





    


