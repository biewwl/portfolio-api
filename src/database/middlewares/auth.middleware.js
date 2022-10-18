const jwt = require('jsonwebtoken');

const isBlank = (string) => !string || string.length === 0;

const SECRET = process.env.LOGIN_SECRET;
const PASS = process.env.LOGIN_PASS;

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (isBlank(authorization) || !authorization) {
    return res.status(400).json({ message: 'Auth is mandatory' });
  }
  const token = jwt.decode(authorization, SECRET);
  if (token !== PASS) {
    return res.status(401).json({ message: 'incorrect auth' });
  }
  return next();
};

module.exports = {
  verifyToken,
};
