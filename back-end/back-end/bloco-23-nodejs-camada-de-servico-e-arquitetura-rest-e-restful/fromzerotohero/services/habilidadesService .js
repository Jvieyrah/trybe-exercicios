const habilidadesModel = require('../models/habilidadesModel');
const validacao = require('../middleware/validacao');

const getAll = async () => {
    // try{
    const result = await habilidadesModel.getAll();
    return result;
    // } catch (error) {
    // console.log(error);
    // resizeBy.status(500).json({ message: 'Erro interno do servidor' });
    // return error;
// }
}

const create = async ({name,level}) => {
    // try{
    const result = await habilidadesModel.create({name,level});
    return result.status(200).jsom(result);
    // } catch (error) {
    //     console.log(error);
    //     resizeBy.status(500).json({ message: 'Erro interno do servidor' });
    //     return error;
    // }
}

module.exports = { getAll, create };