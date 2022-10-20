const { elementSchema } = require('./schemas');

const validationElementSchema = (element) => {
  const { error } = elementSchema.validate(element);
  
  if (error) return { type: 'INVALID_VALUE', message: error.message };
  return { type: null, message: '' };
};

module.exports = {
  validationElementSchema,
};
