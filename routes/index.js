let router = require('express').Router()
let indexController = require('../controllers/index')

router.get('/', indexController.getIndexRoute)

module.exports = router;