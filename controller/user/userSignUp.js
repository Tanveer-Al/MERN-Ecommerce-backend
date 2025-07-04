const userModel = require("../../model/userModel");
const bcrypt = require("bcryptjs");

const userSignUpController = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const user = await userModel.findOne({email});

    if(user){
      throw new Error("Already user exist")
    }
    if (!email) {
      throw new Error("Plese provide Email");
    }
    if (!password) {
      throw new Error("Plese provide Password");
    }
    if (!name) {
      throw new Error("Plese provide Name");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hashSync(password, salt);

    if(!hashPassword){
        throw new Error("Something is wrong")
    }

    const payload = {
        ...req.body,
        role: "GENRAL",
        password: hashPassword
    }

    const userData = new userModel(payload);
    const saveUser = await userData.save()

    res.status(201).json({
        data:saveUser,
        success: true,
        error: false,
        message:"user created successfully",
    })
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = userSignUpController;