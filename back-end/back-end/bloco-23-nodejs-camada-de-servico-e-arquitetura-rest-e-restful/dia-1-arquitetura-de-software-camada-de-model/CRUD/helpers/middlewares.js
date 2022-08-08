app.post('/user', nameValidator, emailValidator,  async (req, res) => {
    const [ firstName, lastName, email ] = req.body

    // const books = await Book.getAll();
  
    res.status(200).json({
        id,
        firstName,
        lastName,
        email
    });
  });
