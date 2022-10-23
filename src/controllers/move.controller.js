const { moveService } = require('../services');

const getAllMoves = async (_req, res) => {
  const { message } = await moveService.getAllMoves();

  res.status(200).json(message);
};

module.exports = {
  getAllMoves,
};