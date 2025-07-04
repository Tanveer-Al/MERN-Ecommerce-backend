const addToCartModel = require("../../model/cartProduct")

const countAddToCartProduct = async(req,res)=>{
    try {
        const userId = req.userId
        const count = await addToCartModel.countDocuments({
            userId : userId
        })
        res.json({
            data : {
                count : count
            },
            message : "OK",
            error : false,
            success : true
        })
    } catch (error) {
        res.json({
            message : error.message || error,
            success : false,
            error : true
        })
    }
}
module.exports = countAddToCartProduct;