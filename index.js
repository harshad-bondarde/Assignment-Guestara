const express=require("express");
const app=express();
const dotenv=require("dotenv")
const connectDB=require("./db/index")
const PORT=3000
const mainRouter=require("./routes/index")
const cors=require("cors")
dotenv.config()

app.use(cors({
    origin:true,
    credentials: true, 
}))

app.use(express.json());

app.use("/",mainRouter)

app.listen(PORT,()=>{
    connectDB()
    console.log(`server is running at ${PORT}`);
})
