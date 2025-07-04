const productModel = require("../../model/productModal");

const getCategoryProduct = async (req, res) => {
    try {
        const productCategory = await productModel.distinct("category");

        const productByCategory = []
        for(const category of productCategory){
            const product = await productModel.findOne({category})
            if(product){
                productByCategory.push(product)
            }
        }
        
        // Return the categories in the response
        res.status(200).json({
            message:"category product",
            data: productByCategory,
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

module.exports = getCategoryProduct;
