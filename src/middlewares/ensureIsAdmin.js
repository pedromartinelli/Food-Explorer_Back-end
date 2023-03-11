const authConfig = require('../configs/auth');
const { verify } = require('jsonwebtoken');
const AppError = require('../utils/AppError');

function ensureIsAdmin(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT não informado', 401);
  };

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id, iss: role } = verify(token, authConfig.jwt.secret);

    request.user = {
      id: Number(user_id),
      role: String(role)
    };

    return next();
  } catch {
    throw new AppError('JWT inválido.', 401);
  };
};

module.exports = ensureIsAdmin;