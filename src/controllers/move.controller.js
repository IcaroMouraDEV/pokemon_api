const { moveService } = require('../services');

const getAllMoves = async (_req, res) => {
  const { message } = await moveService.getAllMoves();

  res.status(200).json(message);
};

const getMoveById = async (req, res) => {
  const { id } = req.params;
  const { message } = await moveService.getById(id);

  res.status(200).json(message);
};

module.exports = {
  getAllMoves,
  getMoveById,
};