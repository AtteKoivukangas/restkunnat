const router = require('express').Router();
const municipalityHandler = require('../handlers/municipality');

router.get(
  '/all',
  municipalityHandler.getAll,
);

router.get(
  '/name/:municipalityName',
  municipalityHandler.getSingleByName,
);

router.get(
  '/administrative-center/:administrativeCenter',
  municipalityHandler.getByAdministrativeCenter,
);

router.get(
  '/language/:language',
  municipalityHandler.getByLanguage,
);

router.get(
  '/municipality-number/:municipalityNumber',
  municipalityHandler.getSingleByMunicipalityNumber,
);

router.get(
  '/province/:province',
  municipalityHandler.getByProvince,
);

router.get(
  '/region/:region',
  municipalityHandler.getByRegion,
);

module.exports = router;
