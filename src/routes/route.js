const express = require("express")
const router = express.Router()

const userController=require("../controllers/userController")
const middleware = require("../middleware/auth")


router.post("/createUser",userController.createUser)
router.post("/login",userController.loginUser)
router.get("/fetchUser/:Id",middleware,userController.fetchUserDetails)
router.put("/updateData/:userId",middleware,userController.updateData)
router.delete("/delete/:id",middleware,userController.DeleteData)


 

module.exports=router