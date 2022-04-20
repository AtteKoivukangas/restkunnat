const Municipality = require('../models/Municipality');

const getAll = (request, response) => {
  const municipalities = Municipality.findAll({ fieldsToInclude: request.fieldsToInclude });
  response.json(municipalities);
};

const getSingleByName = (request, response) => {
  const municipality = Municipality.findSingleByName(
    request.params.municipalityName,
    { fieldsToInclude: request.fieldsToInclude },
  );

  if (municipality === null) {
    return response.sendStatus(404);
  }

  return response.json(municipality);
};

const getByAdministrativeCenter = (request, response) => {
  const municipalities = Municipality.findByAdministrativeCenter(
    request.params.administrativeCenter,
    { fieldsToInclude: request.fieldsToInclude },
  );

  if (municipalities.length === 0) {
    return response.sendStatus(404);
  }

  return response.json(municipalities);
};

const getByLanguage = (request, response) => {
  const municipalities = Municipality.findByLanguage(
    request.params.language,
    { fieldsToInclude: request.fieldsToInclude },
  );

  if (municipalities.length === 0) {
    return response.sendStatus(404);
  }

  return response.json(municipalities);
};

const getSingleByMunicipalityNumber = (request, response) => {
  const municipality = Municipality.findSingleByMunicipalityNumber(
    request.params.municipalityNumber,
    { fieldsToInclude: request.fieldsToInclude },
  );

  if (municipality === null) {
    return response.sendStatus(404);
  }

  return response.json(municipality);
};

const getByProvince = (request, response) => {
  const municipalities = Municipality.findByProvince(
    request.params.province,
    { fieldsToInclude: request.fieldsToInclude },
  );

  if (municipalities.length === 0) {
    return response.sendStatus(404);
  }

  return response.json(municipalities);
};

const getByRegion = (request, response) => {
  const municipalities = Municipality.findByRegion(
    request.params.region,
    { fieldsToInclude: request.fieldsToInclude },
  );

  if (municipalities.length === 0) {
    return response.sendStatus(404);
  }

  return response.json(municipalities);
};

const municipalityHandler = {
  getAll,
  getSingleByName,
  getByAdministrativeCenter,
  getByLanguage,
  getSingleByMunicipalityNumber,
  getByProvince,
  getByRegion,
};

module.exports = municipalityHandler;
