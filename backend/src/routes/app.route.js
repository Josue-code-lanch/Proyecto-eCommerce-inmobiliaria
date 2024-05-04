const router = require('express').Router();

router.get('/', require('../controllers/app.controller').GET);

module.exports = router;
