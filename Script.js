/*Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
---------------------------------------------------
*/

let marina= 30;
let silvia= 20;
let iza = 5;

if (marina < silvia &&  marina < iza) {

    console.log(" Marina é a pessoa mais jovem e possui "+ marina +" anos de idade.");
        
}
else if (silvia < marina && silvia < iza){

    console.log(" Silvia é a pessoa mais jovem e possui "+ silvia + " anos de idade.");

}
else{
    
    console.log(" Iza é a pessoa mais jovem e possui "+ iza + " anos de idade.");
}

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1]; 
console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio') ;

console.log(indexOfPortfolio);

menu.push('Contatos');

console.log(menu);

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let words of names) {
      console.log(words);
  }

