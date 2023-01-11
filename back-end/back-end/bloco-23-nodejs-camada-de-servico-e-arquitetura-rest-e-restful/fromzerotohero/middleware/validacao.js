const Joi = require('joi');

const habilidadesSchema = Joi.object({
    name: Joi.string().min(3).max(30).required().message({
       'string.min': 'Nome deve ter entre 3 e 30 caracteres',
       'string.max': 'Nome deve ter entre 3 e 30 caracteres',
       'string.required': 'Nome é obrigatório'}),
    level: Joi.string().min(3).max(30).required().message({
         'string.min': 'Nível deve ter entre 3 e 30 caracteres',
         'string.max': 'Nível deve ter entre 3 e 30 caracteres',
         'string.required': 'Nível é obrigatório'}),
    });


const validacao = (req, res, next) => {
    const { name, level } = req.body;
    const isValid = habilidadesSchema.validate({ name, level });
    if (isValid.error) {
    return res.status(422).json({ message: isValid.error.message });
    }
    //  (!name || !level) {
    //     return res.status(400).json({ message: 'Nome e nível são obrigatórios' });
    // } if (level.lenght < 3 || level.lenght > 3) {
    //     return res.status(400).json({ message: 'Nível deve estar entre 1 e 5' });
    // }
    next();
};

module.exports = validacao;