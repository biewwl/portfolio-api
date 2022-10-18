const connection = require('../connection');

const getAll = async () => {
  const [result] = await connection.query(`
    SELECT * FROM portfolio.skills;
  `);
  return result;
};

const post = async ({ name, icon }) => {
  const result = await connection.query(
    `
  INSERT INTO portfolio.skills
  VALUES (default, ?, ?);`,
    [name, icon],
  );
  return result;
};

const remove = async (id) => {
  const [result] = await connection.query(
    `
  DELETE FROM portfolio.skills
  WHERE id = ?;`,
    [id],
  );
  return result;
}; 

const getOne = async (id) => {
  const result = await connection.query(
    `
    SELECT * FROM portfolio.skills
    WHERE id = ?;
  `,
    [id],
  );
  return result;
};

const update = async ({ id, name, icon }) => {
  const result = await connection.query(
    `
    UPDATE portfolio.skills
    SET name = ?, icon = ?
    WHERE id = ?;
  `,
    [name, icon, id],
  );
  return result;
};

module.exports = {
  getAll,
  getOne,
  post,
  remove,
  update,
};
