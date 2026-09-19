const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const morgan = require("morgan")
const authRouter = require("./routes/auth.route");
const categoryRouter = require("./routes/category.route");
//middleware

app.use(morgan("dev"))
app.use(express.json())

app.use("/", authRouter)
app.use("/", categoryRouter)

async function Bootstarp() {
    try{
        await mongoose.connect(
            process.env.MONGO_URL,
            {
                dbName:"E-com"
            }
        )
        console.log("Connected to Database");
        app.listen(PORT, ()=>{
        console.log(`app is listining on PORT ${PORT}`)
        })
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
}
Bootstarp()