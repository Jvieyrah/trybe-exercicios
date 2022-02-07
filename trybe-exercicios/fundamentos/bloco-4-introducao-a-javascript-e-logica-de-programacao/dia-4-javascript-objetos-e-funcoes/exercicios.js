let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald', 
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim', 
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente:  'Sim',
  };

// //   1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:

// console.log( "boas vindas " + info.personagem);
// // 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
// for (let par in info) {
//     console.log( par);
//    }
// //    4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// for (let par in info) {
//     console.log(info[par]);
//    }
   
// for (let par in info) {
//  console.log( par, info[par]);
// }

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
// console.log(info.personagem  +" e " + info2.personagem + ","+ info.origem +" e " +  info2.origem +","+ info.nota +" e " +  info2.nota +",");   
// if ( info.recorrente == 'Sim' && info2.recorrente == 'Sim') {
// console.log(" Ambos recorrentes."); 

// }

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };


  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor['livrosFavoritos'][0]['titulo'] + ".")

  leitor.livrosFavoritos.push( {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  });

  console.log (leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos.")


  