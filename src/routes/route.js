const express = require('express');
const router = express.Router();

const Controller = require("../controllers/controller")


router.get("/londonTemp",Controller.londonTemp)



module.exports = router;