const userModel = require("../../model/userModel");

const allUsers = async (req,res) => {
  try {
    console.log("userId all users", req.userId);
    const allUsers = await userModel.find();

    res.json({
      message: "All Users",
      data: allUsers,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = allUsers;
