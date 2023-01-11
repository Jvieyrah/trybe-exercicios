module.exports = (req, res, next) => {
    const { user } = req;
    //
    if (!user) {
        /* Criamos um objeto de erro */
        const err = new Error('This endpoint requires authentication');
        /* Atribuímos o status `401 Unauthorized` ao erro */
        err.statusCode = 401;
        /* E enviamos o erro para o middleware de erro */
        return next(err);
      }
      if (!user.admin) {
        /* Criamos um novo erro com status `403 Forbidden` */
        const err = new Error('Restricted access');
        err.statusCode = 403;
        /* Enviamos o erro para ser processado no middleware de erros */
        return next(err);
      }
      return next();
  }