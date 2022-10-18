const express = require('express');
const { getAll, post, remove, update } = require('../database/controllers/skills.controller.');
const { verifyToken } = require('../database/middlewares/auth.middleware');
const { verifyName, verifyIcon, verifyId } = require('../database/middlewares/skills.middleware');

const skills = express.Router();

skills.get('/skills', getAll);
skills.post('/skills', verifyToken, verifyName, verifyIcon, post);
skills.delete('/skills/:id', verifyToken, verifyId, remove);
skills.put('/skills/:id', verifyToken, verifyId, update);

module.exports = skills;
