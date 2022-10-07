const Joi = require('joi');

const elementSchema = Joi.object({
  element: Joi.string.required(),
});

module.exports = {
  elementSchema,
};
