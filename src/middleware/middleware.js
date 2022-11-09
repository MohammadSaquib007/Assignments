var iP = require("request-ip")

const midWare = function(req, res, next){
    console.log("This is by middle ware....")
    let date = new Date()
    console.log(date.getFullYear() + "-"+date.getMonth() +  "-" +date.getDate()+" "+ date.getHours() + ":"+ 
    date.getMinutes() + ":" + date.getSeconds())
    
    console.log(iP.getClientIp(req))   //we have to install package by using --> npm install request-ip

    console.log(req.route.path);
    next()
}



module.exports.midWare =midWare