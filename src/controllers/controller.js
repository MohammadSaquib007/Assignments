
const axios = require("axios")
const getDistrictsList = async function(req, res) {

    try {
        let id = req.query.district_id 
        let date=req.query.data
        console.log(" district: ", id)

        let options = {
           method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}` 
        }
        let response = await axios(options)

        let districts = response.data

        console.log(response.data)
        res.status(200).send({ msg: "Success", data: districts })

    } catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: "Something went wrong" })
    }
}






module.exports.getDistrictsList=getDistrictsList
