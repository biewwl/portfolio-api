const express = require('express');
const jwt = require('jsonwebtoken');

const login = express.Router();

const PASS = process.env.LOGIN_PASS;
const SECRET = process.env.LOGIN_SECRET;

login.post('/login', (req, res) => {
  if (req.body.password === PASS) {
    const token = jwt.sign(PASS, SECRET);
    return res.status(200).json({ token });
  }
  return res.status(401).json({ message: 'Incorrect Pass' });
});

module.exports = login;
