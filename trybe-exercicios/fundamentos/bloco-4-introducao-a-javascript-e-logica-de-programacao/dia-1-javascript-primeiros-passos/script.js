let a = 5;
let b = 5;
let result = "";

sum = (a + b);
sub = (a - b);
mult = (a * b);
div = (a / b);
mod = (a % b);

console.log (sum);
console.log (sub);
console.log (mult);
console.log (div);
console.log (mod);

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const uno= 100;
const duo= 50;
const trio= 33;

if (uno > duo ){

    console.log  (uno);

}
else if (duo > trio ) {
    console.log  (duo);
    
} else {
    console.log (trio);
    
}


// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const xablau= -10;

if (xablau > 0){

    console.log  ("Positive");

}
else if (xablau < 0) {
    console.log ("Negative");
    
} else {
    console.log ("zero");
    
}
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const angA=30;
const angB=60;
const angC=90;
let somaAngulos = ((angA+angB) +angC);

if (somaAngulos == 180) {
    console.log (true);
}
else {
    console.log (false);
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca= "Rainha";
var  lCpeca = peca.toLowerCase();

console.log (lCpeca);
switch(lCpeca){
case "rei":
    console.log ("Pode mover-se em qualquer direção, porém apenas uma casa por vez");
break;
case "dama":
    console.log ("pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
break;
case" bispo":
    console.log ("Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.");
break;
case "cavalo":
console.log ("É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal, uma na horizontal e duas na vertical, e assim por diante. Quando a casa de saída do Cavalo for escura, a casa de chegada será clara, e vice-versa.");
break;
case "torre":
    console.log ("Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
break;
case "peão":
    console.log ("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.");
    break;
case "rainha":
    console.log ("Ao contrário do que se pensa, não existe rainha no xadrés");
    break;
default:   
    console.log ("Peça não reconheda, digite o nome de uma peça valida e no slingular (EX: não digite 'cavalos', digite 'cavalo')");

}
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let nota = 91;


if (nota >= 90 && nota < 100){

    console.log  ("Nota A");

}
else if (nota >= 80 && nota < 90){
        console.log ("Nota B");
       
    } 
else if (nota >= 70 && nota < 80){
    console.log ("Nota C");
   } 
else if (nota >= 60 && nota < 70){
    console.log ("Nota D");
   } 

else if (nota >= 50 && nota < 60){
    console.log ("Nota F");
  } 
else if (nota < 50 && nota > 0){
    console.log ("Nota F");
  } 
else if (nota < 0 || nota > 100){
    console.log ("Erro");
  }  
else {
    console.log ("zero");

}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

const um =12;
const dois = 21;
const tres = 30;

if ( (um % 2) == 0 || (dois % 2) == 0  || (tres % 2) == 0 ) {

    console.log  (" True - Pelo menos uma das variáveis é par");
}
  
else { console.log("False - Nenhuma das variáveis é par");
}

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

if ( (um % 2) !== 0 || (dois % 2) !== 0  || (tres % 2) !== 0 ) {

    console.log  (" True - Pelo menos uma das variáveis é inpar");
}
  
else { console.log("False- Nenhuma das variáveis é inpar");
}

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custProd= 9.80;
let impProd= (custProd + (custProd*0.2));
const vendProd= 13.99;
let lucro = (vendProd - impProd);
console.log(lucro)

if (custProd<0 || vendProd < impProd || vendProd < 0) {
console.log(" Erro geral- ou seu  valor de venda é menor que o valor de custo ou os valores de entrada talvez sejam menores que zero.")
}
else{
console.log (lucro*1000);

}

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salario = 3000;
let inss = "";



//inss
if (salario < 1500.10) {
    inss= 0;
}

    if ( salario > 1556.95 || salario < 2594.92){
        inss= (salario*0.08)
    }
    if ( salario > 2594.92 || salario < 5189.82){
        inss= (salario*0.11)
       
    }
else {
    inss= 570.88;
}
let salarioseminss= (salario - inss);
//ir
let ir = "";
if (salarioseminss < 1903.98) {
    ir= 0;
}

    if ( salarioseminss > 1903.98 || salarioseminss < 2826.65){
        ir=((salarioseminss*0.075) -142.80);
          
    }


    if ( salarioseminss > 2826.65 || salarioseminss < 3751.05){
        ir=(salarioseminss*0.15) -(354.80);
          
    }
   
    if ( salarioseminss > 3751.05 || salarioseminss < 4.664,68){
        ir=((salarioseminss*0.225) -636.13);
          
    }


else {
    ir=((salarioseminss*0.275) -869.36 );
}

console.log (salario);
console.log (inss);
console.log (salarioseminss)
console.log (ir)

console.log (salarioseminss-ir);

  







    //console.log (result);

//}
//function sub (result =  a - b){

    //console.log (result);

//}

//function mult (result = a * b){

  ////  console.log (result);

//}

//function div (result = a/b){

    //console.log (result);

//}

//function mod (result = a%b){

   // console.log (result);

//}