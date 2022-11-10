const express = require('express');
const router = express.Router();

const Controller = require("../controllers/controller")

//router.get("/cowin/districts/:stateId",Controller.getDistrictsList)
router.get("/cowin/:district_id",Controller.getDistrictsList)


module.exports = router;