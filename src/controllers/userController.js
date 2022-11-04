const userModels = require("../models/userModel");
const jwt = require("jsonwebtoken");
//*************************UserCreate*********** */
const createUser = async function (req, res) {
  const requestBody = req.body;
  const saveData = await userModels.create(requestBody);
  res.send({ status: true, msg: "user created succesfully", data: saveData });
};
//*****************************login Api ****************/
const login = async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  if (email && password) {
    const payload = await userModels.findOne({
      email: email,
      password: password,
    });

    if (payload) {
      const token = jwt.sign({ createUser: payload._id }, "saquib");
      return res.send({ status: true, token: token });
    } else {
      return res.send({ status: false, msg: "invalid credentials" });
    }
  }
};
//***************************fetchUser*****************8 */
const getUser = async function (req, res) {
  const Id = req.params.Id;

  const data = await userModels.findById({ _id: Id });
  res.send({ status: true, msg: "user fetch succesfully", data: data });
};
//************************************updateUser******************* */
const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let requestBody = req.body;

  let updateData = await userModels.findOneAndUpdate(
    { _id: userId },
    requestBody,
    { new: true }
  );
  return res.send({ status: true, msg: "succesfull", data: updateData });
};

//**********************************deleteApi*********************** */
const deleted = async function (req, res) {
  const userId = req.params.userId;

  await userModels.findByIdAndDelete({ _id: userId });
  return res.send({ status: true, msg: "succesfully deleted" });
};
module.exports = { createUser, login, getUser, updateUser, deleted };
