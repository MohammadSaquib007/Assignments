const express = require('express');
const router = express.Router();



const usingMidWare = require('../middleware/middleware')
const assnController = require('../controllers/controller')


router.get('/midWare', usingMidWare.midWare,assnController.apiLogic)




module.exports = router;