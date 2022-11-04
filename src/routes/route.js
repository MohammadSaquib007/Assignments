const express = require("express")
const router = express.Router()


const userController= require("../controllers/userController")
const middleware= require("../middleware/auth")


router.post("/userCreate",userController.createUser)
router.post("/userLogin",userController.login)
router.get("/userDetail/:Id",middleware.userAuth,userController.getUser)
router.put("/update/:userId",middleware.userAuth,userController.updateUser)
router.delete("/deleteUser/:userId",middleware.userAuth,userController.deleted)



module.exports = router