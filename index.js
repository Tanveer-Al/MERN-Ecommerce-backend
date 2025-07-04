const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
require("dotenv").config();
const router = require("./routes/server")

const app = express();

app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api", router)

const port = 8000 || process.env.PORT

connectDB().then(()=>{
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
 })
});