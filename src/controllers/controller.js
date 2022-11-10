
const londonTemp = async function(req, res) {
    try {

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=d03c6511ac589c04857f3a2bc06681fd`

        };
        const london = await axios(options);

        console.log("weather update");
        let x = london.data.main.temp;
        res.status(200).send({ msg: "Successfully fetched data", data: x });

    } catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }

};




module.exports.londonTemp=londonTemp
