const userModel = require("../../model/userModel");
const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcryptjs");

const userSignInController = async(req,res)=>{
        try {
            const {email, password} = req.body

            if(!email){
                throw new Error("Plese Provide Email")
            }
            if(!password){
                throw new Error("Plese Provide Password")
            }
            const user = await userModel.findOne({email});

            if(!user){
                throw new Error("user not found");
            }
            const checkPassword = await bcrypt.compare(password, user.password)
            console.log("checkpassword",checkPassword)

            if(checkPassword){
                const tokenData = {
                    _id : user._id,
                    email : user.email,
                }
                const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 });

                const tokenOption = {
                    httpOnly : true,
                    secure : true
                }

                res.cookie("token",token,tokenOption).json({
                    message : "Login Successfully",
                    data : token,
                    success : true,
                    error: false
                });
            }
            else{
                throw new Error("Plese Check Password");
            }
        }
         catch (error) {
            res.json({
                message : error.message || error,
                error : true,
                success: false,
            })
        }
}

module.exports = userSignInController;