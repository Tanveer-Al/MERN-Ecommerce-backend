const mongoose = require("mongoose"); 

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("db connected")
    } catch (error) {
        console.log("db not connected", error);
        process.exit(0);
    }
}
module.exports = connectDB