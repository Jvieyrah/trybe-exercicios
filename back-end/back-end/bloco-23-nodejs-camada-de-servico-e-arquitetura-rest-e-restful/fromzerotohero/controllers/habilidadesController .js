const habiidadesService = require('../services/habilidadesService');

const getAll = async (req,res, next) => {
    try{
    const resultado = await habiidadesService.getAll();
    return res.status(200).json(resultado);
    } catch (error) {
        next(error);
        console.log(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
        return error;
    }
}

const create = async (req,res, next) => {
    const {name,level} = req.body;
    try{
    const resultado = await habiidadesService.getAll( {name,level} );
    return res.status(200).json(resultado);
    } catch (error) {
        next(error);
        console.log(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
        return error;
    }
}

module.exports = { getAll, create};