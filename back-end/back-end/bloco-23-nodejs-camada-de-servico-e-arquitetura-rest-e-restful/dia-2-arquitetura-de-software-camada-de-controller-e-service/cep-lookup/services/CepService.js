// services/CepService.js

const Cep = require('../models/CepModel');

const CEP_REGEX = /^\d{5}-?\d{3}$/;

const findAddressByCep = async (searchedCep) => {
  // Começamos buscando o CEP no banco de dados
  const cep = await Cep.findAddressByCep(searchedCep);

  // Caso encontremos, retornamos sem consultar a API
  if (cep) {
    return cep;
  }

  // Caso o CEP não exista no banco de dados, buscamos na API
  const cepFromApi = await ViaCep.lookupCep(searchedCep);

  // Caso o CEP não exista na API,
  // retornamos um erro dizendo que
  // o CEP não foi encontrado
  if (!cepFromApi) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  // Caso o CEP exista na API, pedimos ao model
  // que armazene-o no banco e retornamos
  // o resultado
  return Cep.create(cepFromApi);
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  // Começamos buscando o cep que estamos tentando cadastrar
  const existingCep = await Cep.findAddressByCep(cep);

  // Caso o CEP já exista, retornamos um erro dizendo que ele já existe
  if (existingCep) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente',
      },
    };
  }
}

module.exports = {
  findAddressByCep,
  create,
};
