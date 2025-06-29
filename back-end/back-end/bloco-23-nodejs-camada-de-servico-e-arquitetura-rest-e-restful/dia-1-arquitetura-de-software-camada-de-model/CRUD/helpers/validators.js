const passwordValidator = (req, res, next) => { 
    const { password } = req.body;
    const six = 6;
     if (!password || password.length < six) {
      return res.status(400).json({ message: '"password" length must be at least 6 characters long' });
    } 
    next();    
 };

 const nameValidator = (req, res, next) => { 
    const { firstName, lastName } = req.body;
     if (!firstName || !lastName) {
      return res.status(400).json({ message: '"firstName" and "lastName" are required' });
    } 
    next();    
 };

 const emailValidator = (req, res, next) => { 
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    } if (!email.includes('@') || !email.includes('.com')) {
        return res.status(400)
        .json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();    
 };

 module.exports = { passwordValidator,
    nameValidator,
    emailValidator
 };