const empresaModel = require('../models/empresaModel');

const getAll = async () => {
    const result = await empresaModel.getAll();
    return result;
}

module.exports = { getAll };