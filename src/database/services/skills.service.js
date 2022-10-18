const skillsModel = require('../models/skills.model');

const getAll = async () => {
  try {
    const payload = await skillsModel.getAll();
    if (payload.length === 0) {
      return {
        code: 404,
        payload: { message: 'Not found register' },
      };
    }
    return {
      code: 200,
      payload,
    };
  } catch (error) {
    return {
      code: 400,
      payload: { message: error.message },
    };
  }
};

const post = async (name, icon) => {
  try {
    const payload = await skillsModel.post({ name, icon });
    return {
      code: 200,
      payload,
    };
  } catch (error) {
    return {
      code: 400,
      payload: { message: error.message },
    };
  }
};

const remove = async (id) => {
  try {
    const resultSet = await skillsModel.remove(id);
    const payload = resultSet.affectedRows === 1
    ? { message: 'Successful DELETE!' }
    : { message: 'Not Found register!' };
    return {
      code: 200,
      payload,
    };
  } catch (error) {
    return {
      code: 400,
      payload: { message: error.message },
    };
  }
};

const update = async (id, name, icon) => {
  try {
    const payload = await skillsModel.update({ id, name, icon });
    return {
      code: 200,
      payload,
    };
  } catch (error) {
    return {
      code: 400,
      payload: { message: error.message },
    };
  }
};

module.exports = { getAll, post, remove, update };
