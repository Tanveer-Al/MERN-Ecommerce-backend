const addToCartModel = require("../../model/cartProduct")

const deleteAddToCartProduct = async(req,res)=>{
    try {
        const currentUserId = req.userId
        const addToCartProductId = req.body._id

        const deleteProduct = await addToCartModel.deleteOne({_id : addToCartProductId})
        res.json({
            message : "Product Deleted from Cart",
            error : false,
            success: true,
            data : deleteProduct
        })
    } catch (error) {
        res.json({
            message: err?.message || err,
            error: true,
            success : false
        })
    }
}

module.exports = deleteAddToCartProduct