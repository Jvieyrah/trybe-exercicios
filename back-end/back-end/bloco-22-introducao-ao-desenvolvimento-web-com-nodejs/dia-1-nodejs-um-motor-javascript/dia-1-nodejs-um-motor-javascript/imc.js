const readline = require('readline-sync');
// const PESO_PADRAO_EM_KG = 80; // Você pode utilizar o valor que desejar aqui
// const ALTURA_PADRAO_EM_CM = 178; // Você pode utilizar o valor que desejar aqui

function calculaImc(peso, altura) {

  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const alturaEmMetros = altura / 100;
  const alturaAoQuadrado = alturaEmMetros ** 2;

  const imc = (peso / alturaAoQuadrado);
  const situacao = calculaSituacao(imc);
  console.log(`Situação: ${situacao}`);
  return imc;
}

// A função main é o ponto de partida do nosso programa 
function main() {
  // const imc = calculaImc(PESO_PADRAO_EM_KG, ALTURA_PADRAO_EM_CM);
  const peso = readline.questionFloat('Qual o seu peso? (em kg)');
  const altura = readline.questionInt('Qual a sua altura? (em cm)');
 
  const imc = calculaImc(peso, altura);
  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();

const IMC_MAXIMO_E_MINIMO_POR_SITUACAO = {
  'Abaixo do peso (magreza)': {
    imcMinimo: 0, // Um valor default mínimo qualquer, impossível de alcançar no imc.
    imcMaximo: 18.4,
  },
  'Peso normal': {
    imcMinimo: 18.5,
    imcMaximo: 24.9,
  },
  'Acima do peso (sobrepeso)': {
    imcMinimo: 25,
    imcMaximo: 29.9,
  },
  'Obesidade grau I': {
    imcMinimo: 30.0,
    imcMaximo: 34.9,
  },
  'Obesidade grau II': {
    imcMinimo: 35,
    imcMaximo: 39.9,
  },
  'Obesidade graus III e IV': {
    imcMinimo: 40,
    imcMaximo: 100 // Um valor default máximo qualquer, impossível de alcançar no imc.
  },
};

function calculaSituacao(imc) {
  const situacoes = Object.keys(IMC_MAXIMO_E_MINIMO_POR_SITUACAO); // ['Abaixo do peso (magreza)', 'Peso normal', 'Acima...']

  const situacaoEncontrada = situacoes.find((situacao) => {
    const { imcMaximo, imcMinimo } = IMC_MAXIMO_E_MINIMO_POR_SITUACAO[situacao]; // acessamos as informações do intervalo da situação iterada

    // caso esteja dentro do intervalo, significa que encontramos a situação apropriada
    return imc >= imcMinimo && imc <= imcMaximo;
  });

  return situacaoEncontrada;
}