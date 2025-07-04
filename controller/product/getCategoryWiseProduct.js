const productModel = require("../../model/productModal");

const getCategoryWiseProduct = async (req, res) => {
    try {
        const { category } = req?.body || req?.query
        const product = await productModel.find({category}) 

        res.status(200).json({
            message:"product",
            data: product,
            success: true,
            error: false
        });
        
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
};

module.exports = getCategoryWiseProduct;
