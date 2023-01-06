class UsersController {
  create(request, response) {
    const { name, email, password } = request.body;

    console.log('Post funcionando')
    response.json({ name, email, password });
  }
}

module.exports = UsersController