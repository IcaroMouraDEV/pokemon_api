const conn = require('./connection');

const insert = (element) => conn.execute('INSERT INTO element (element) VALUES (?)', [element]);

const findAll = () => conn.execute('SELECT * FROM element');

const findById = (id) => conn.execute('SELECT * FROM element WHERE id = ?', [id]);

const update = (id, element) => conn.execute(`
  UPDATE element
  SET element = ?
  WHERE id = ?
  `, [element, id]);

const remove = (id) => conn.execute('DELETE FROM element WHERE id = ?', [id]);

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};
