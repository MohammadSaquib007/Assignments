const jwt = require("jsonwebtoken");
const userAuth = async (req, res, next) => {
  const token = req.headers["x-api-key"];
  if (!token) {
    return res.send({
      status: false,
      msg: "missing authentication token in request",
    });
  }
  const decoded = await jwt.verify(token, 'saquib');
  if (!decoded) {
    return res.send({
      status: false,
      message: "Invalid authentication token in request ",
    });
  }
  req.userId = decoded.userId;
  next();
};
module.exports = { userAuth };
