const municipalitiesJSON = require('../resources/municipalitiesV1.0.json');

const pick = (object, keys) => (
  keys.reduce((acc, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      acc[key] = object[key];
    }

    return acc;
  }, {})
);

const parseMunicipalities = (municipalities, fieldsToInclude) => {
  if (!fieldsToInclude || fieldsToInclude === '*') {
    return municipalities;
  }

  return Array.isArray(municipalities)
    ? municipalities.map((municipality) => pick(municipality, fieldsToInclude))
    : pick(municipalities, fieldsToInclude);
};

const findAll = (options = {}) => {
  const { fieldsToInclude } = options;
  return parseMunicipalities(municipalitiesJSON, fieldsToInclude);
};

const findSingleByName = (municipalityNameToFind, options = {}) => {
  const { fieldsToInclude } = options;

  const municipality = municipalitiesJSON.find(({ name }) => (
    name.toLowerCase() === municipalityNameToFind.toLowerCase()
  ));

  return municipality ? parseMunicipalities(municipality, fieldsToInclude) : null;
};

const findByAdministrativeCenter = (administrativeCenterToFind, options = {}) => {
  const { fieldsToInclude } = options;

  const filteredMunicipalities = municipalitiesJSON.filter(({ administrativeCenter }) => (
    administrativeCenter.toLowerCase() === administrativeCenterToFind.toLowerCase()
  ));

  return parseMunicipalities(filteredMunicipalities, fieldsToInclude);
};

const findByLanguage = (languageToFind, options = {}) => {
  const { fieldsToInclude } = options;

  const filteredMunicipalities = municipalitiesJSON.filter(({ languages }) => (
    languages.some((language) => (
      language.toLowerCase() === languageToFind.toLowerCase()
    ))
  ));

  return parseMunicipalities(filteredMunicipalities, fieldsToInclude);
};

const findSingleByMunicipalityNumber = (municipalityNumberToFind, options = {}) => {
  const { fieldsToInclude } = options;

  const municipality = municipalitiesJSON.find(({ municipalityNumber }) => (
    Number(municipalityNumber) === Number(municipalityNumberToFind)
  ));

  return municipality ? parseMunicipalities(municipality, fieldsToInclude) : null;
};

const findByProvince = (provinceToFind, options = {}) => {
  const { fieldsToInclude } = options;

  const filteredMunicipalities = municipalitiesJSON.filter(({ province }) => (
    province.toLowerCase() === provinceToFind.toLowerCase()
  ));

  return parseMunicipalities(filteredMunicipalities, fieldsToInclude);
};

const findByRegion = (regionToFind, options = {}) => {
  const { fieldsToInclude } = options;

  const filteredMunicipalities = municipalitiesJSON.filter(({ region }) => (
    region.toLowerCase() === regionToFind.toLowerCase()
  ));

  return parseMunicipalities(filteredMunicipalities, fieldsToInclude);
};

const Municipality = {
  findAll,
  findSingleByName,
  findByAdministrativeCenter,
  findByLanguage,
  findSingleByMunicipalityNumber,
  findByProvince,
  findByRegion,
};

module.exports = Municipality;
