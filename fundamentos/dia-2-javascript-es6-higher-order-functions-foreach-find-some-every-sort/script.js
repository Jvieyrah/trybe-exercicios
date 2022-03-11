const estudantes = [
    {
      nome: 'Joel',
      Projeto: 'Trybewarts',
      status: 98,
    },
    {
      nome: 'Mica',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Hugonardo',
      Projeto: 'Trybewarts',
      status: 97,
    },
    {
      nome: 'Aninha',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Joicy',
      Projeto: 'Trybewarts',
      status: 100,
    },
    {
      nome: 'Ronald',
      Projeto: 'Trybewarts',
      status: 75,
    },
  ];

const parabens = (array) => {array.forEach((elemento) => {
    // console.log(elemento);
    if(elemento.status === 100) {
        console.log(`olá ${elemento.nome} parabens por ter finalizado 100% do ${elemento.Projeto} `)
    }        
});
}
parabens(estudantes);

//  const tryber = (array, valor) => array.find((elemento) =>  elemento.status < valor);

// const boot = tryberfound =>  console.log(`olá ${tryberfound.nome} vimos que completou ${tryberfound.status}% do  ${tryberfound.Projeto}, tá precisando de uma força ?`);


// const botTrybe =  estudantes.find((elemento) => elemento.status < 
// 100);

// console.log(boot(tryber(estudantes, 80)));

//   console.log(botTrybe(estudantes, estudantes.status, 80));



  