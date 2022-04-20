const unknownEndpoint = (request, response) => {
  response
    .status(404)
    .type('text/plain; charset=utf-8')
    .send('Unknown Endpoint');
};

const extractFieldsToInclude = (request, response, next) => {
  if (typeof request.query.fields === 'string' && request.query.fields.length > 0) {
    request.fieldsToInclude = request.query.fields.split(',').map((string) => string.trim());
  } else {
    request.fieldsToInclude = '*';
  }

  next();
};

module.exports = {
  unknownEndpoint,
  extractFieldsToInclude,
};
