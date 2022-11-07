const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

//**********************************************createApi */
const createUser = async (req, res) => {
  try {
    let requestBody = req.body;

    const userCreation = await userModel.create(requestBody);
    return res.status(201).send({
      status: true,
      data: userCreation,
      msg: "user created successfuly ",
    });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.msg });
  }
};

//=====================================login==============================================================

const loginUser = async (req, res) => {
  try {
    let email = req.body.emailId;
    let pass = req.body.password;

    if (!email || !pass) {
      res.send({ status: false, msg: "email id and password are mandatory" });
    }
    if (email && pass) {
      const loginDetails = await userModel.findOne({
        emailId: email,
        password: pass,
      });
      if (loginDetails) {
        const token = jwt.sign({ createUser: loginDetails._id }, "key.secret");
        return res.status(200).send({ status: true, token: token });
      } else {
        return res
          .status(404)
          .send({ status: false, msg: "invalid credentials" });
      }
    }
  } catch (err) {
    return res.status(500).send({ status: false, message: err.msg });
  }
};

//**********************fetch Api********************************* */
const fetchUserDetails = async function (req, res) {
  try {
    const Id = req.params.Id;
    const userDetails = await userModel.findById({ _id: Id });
    return res.status(200).send({ status: true, data: userDetails });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.msg });
  }
};

//******************updatrApi********** */
const updateData = async (req, res) => {
  try {
    const userId = req.params.userId;

    let user = await userModel.findById(userId);
    if (!user) {
      res.status(404).send({ status: false, msg: "userID not Valid" });
    }

    let userData = req.body;
    let UpdateDetails = await userModel.findOneAndUpdate(
      { _id: userId },
      userData
    );
    res
      .status(200)
      .send({ status: true, data: UpdateDetails, msg: "updated Successfully" });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.msg });
  }
};
//***************************deleteApi**************** */

const DeleteData = async (req, res) => {
  try {
    let id = req.params.id;

    if (!id) {
      res.send({ status: false, msg: "invalid ID" });
    }

    const deleteUser = await userModel.findByIdAndDelete({ _id: id });
    res.status(200).send({
      status: true,
      msg: "userDeleted successfully",
      data: deleteUser,
      isDeleted: true,
    });
  } catch (err) {
    return res.status(500).send({ status: false, message: err.msg });
  }
};

module.exports = {
  createUser,
  loginUser,
  fetchUserDetails,
  updateData,
  DeleteData,
};
