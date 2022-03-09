
    const createMail = (nome) => {
const user = nome.replace(/ /,"_").toLowerCase();
  return { nome, email: `${user}@trybe.com`};
  }


//3 - Função passada como parametro de newemplyees
const newEmployees = (callback) => {
    const employees = {
      id1: callback("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

 console.log(newEmployees(createMail));




const apostado = (numero) => numero;

const sorteado = () =>{ 
   const min = Math.ceil(1);
   const max = Math.floor(5);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
  }


const resultadoSorteio = (apostado) =>{
    if (apostado === sorteado()){
            
        return "Parabéns você ganhou";
        } else {
            console.log(apostado);
            console.log(sorteado());
        return "Tente novamente" ;
            }
}

console.log(resultadoSorteio(apostado(2)));



 const gabarito = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
 const prova = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


const comparador = (prova, gabarito) => {
if(prova == gabarito){
    return 1;
} if (prova == 'N.A'){ 
    return 0;
}
    return -0.5;
};



const grade = (gabarito , prova, action) => {
 let counter = 0;
 for(let index = 0; index < gabarito.length; index += 1){
const avaliação = action(prova[index], gabarito[index]);
counter += avaliação; 
 }
return `o resultado foi: ${counter} pontos`;
 }

 console.log(grade(gabarito, prova, comparador));
