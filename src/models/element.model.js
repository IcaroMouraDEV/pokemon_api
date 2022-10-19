const conn = require('./connection');

const insert = async (element) => {
  const [{ insertId }] = await conn.execute('INSERT INTO element (element) VALUES (?)', [element]);

  return insertId;
};

const findAll = async () => {
  const [result] = await conn.execute('SELECT * FROM element');

  return result;
};

const findById = async (id) => {
  const [[result]] = await conn.execute('SELECT * FROM element WHERE id = ?', [id]);

  return result;
};

const update = async (element, id) => {
  const [result] = await conn.execute(
    'UPDATE element SET element = ? WHERE id = ?',
    [element, id],
  );

  return result;
};

const remove = async (id) => {
  const [result] = await conn.execute('DELETE FROM element WHERE id = ?', [id]);

  return result;
};

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};
