const productModel = require("../../model/productModal");
const updateProductPermission = require("../../helpers/permission")

const updateProductController = async (req, res) => {
  try {
    if (!updateProductPermission(req.userId)) {
      throw new Error("Permission denied");
    }
    const { _id, ...resBody } = req.body;
    const updateProduct = await productModel.findByIdAndUpdate(_id,resBody)

    res.json({
        message:"Product Update Successfully",
        data : updateProduct,
        success: true,
        error: false
    })
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
module.exports = updateProductController;
