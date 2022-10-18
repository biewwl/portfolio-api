const skillsService = require('../services/skills.service');

const getAll = async (_req, res) => {
  const data = await skillsService.getAll();
  const { code, payload } = data;
  return res.status(code).json(payload);
};

const post = async (req, res) => {
  const { name, icon } = req.body;
  const data = await skillsService.post(name, icon);
  const { code, payload } = data;
  return res.status(code).json(payload);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const data = await skillsService.remove(Number(id));
  const { code, payload } = data;
  return res.status(code).json(payload);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name, icon } = req.body;
  const data = await skillsService.update(Number(id), name, icon);
  const { code, payload } = data;
  return res.status(code).json(payload);
};

module.exports = { getAll, post, remove, update };
