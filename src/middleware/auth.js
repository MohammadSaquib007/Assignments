const jwt = require('jsonwebtoken')

const userAuthentication = async(req,res,next) => {
    
        const token = req.headers["x-auth-token"]
      

        if(!token){
            return res.status(403).send({status:false,msg:'missing authentication token in request'})
          
        }  
        
      let decoded = await jwt.verify(token,"key.secret")
      if(!decoded){
         
          return res.send({status:false,message:"Invalid authentication token in request"})
           
  }
       
        req.Id = decoded.Id
            next()
        
        
        
        
    

       
}
module.exports = userAuthentication