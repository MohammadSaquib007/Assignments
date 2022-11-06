const userModel =require("../models/userModel")
const jwt = require("jsonwebtoken")


//**********************************************createApi */
const createUser = async(req,res)=>{

let requestBody = req.body

const userCreation = await userModel.create(requestBody)
res.send({status:true,data:userCreation,msg:"user created successfuly "})
}

//=====================================login==============================================================


const loginUser = async(req,res)=>{

let email =req.body.emailId
let pass = req.body.password

if(!email||!pass){
    res.send({status:false,msg:"email id and password are mandatory"})

}
if(email && pass){
 const loginDetails=   await userModel.findOne({emailId:email,password:pass})
 if(loginDetails){

    const token = jwt.sign({createUser:loginDetails._id},"key.secret")
    res.send({status:true,token:token})
 } 
 else {
    return res.send({ status: false, msg: "invalid credentials" })
}  
}


}

//**********************fetch Api********************************* */
const fetchUserDetails = async function(req,res){


    const Id = req.params.Id
    const userDetails = await userModel.findById({_id:Id})
      res.send({status:true,data:userDetails})

   }


//******************updatrApi********** */
   const updateData = async(req,res)=>{

const userId=req.params.userId 

 let user = await  userModel.findById(userId)
   if(!user){
      res.send({status:false,msg:"userID not Valid"})
   }

   let userData =req.body
   let UpdateDetails = await userModel.findOneAndUpdate({_id:userId},userData)
   res.send({status:true,data:UpdateDetails,msg:"updated Successfully"})

   }
 //***************************deleteApi**************** */

   const DeleteData =async(req,res)=>{

  let id =req.params.id

if(!id){
   res.send({status:false,msg:"invalid ID"})
}
  
const deleteUser =await userModel.findByIdAndDelete({_id:id, })
res.send({status:true,msg:"userDeleted successfully",data:deleteUser,isDeleted:true})

   }



module.exports={createUser,loginUser,fetchUserDetails,updateData,DeleteData}