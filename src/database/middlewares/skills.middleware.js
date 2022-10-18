const isBlank = (string) => !string || string.length === 0;

const verifyId = (req, res, next) => {
  const { id } = req.params;
  if (isBlank(id)) {
    return res.status(400).json({ message: 'id is mandatory' });
  }
  return next();
};

const verifyName = (req, res, next) => {
  const { name } = req.body;
  if (isBlank(name)) {
    return res.status(400).json({ message: 'name is mandatory' });
  }
  return next();
};

const verifyIcon = (req, res, next) => {
  const { icon } = req.body;
  if (isBlank(icon)) {
    return res.status(400).json({ message: 'icon is mandatory' });
  }
  return next();
};

module.exports = {
  verifyId,
  verifyName,
  verifyIcon,
};
