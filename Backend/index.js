import express from "express"
import dotenv from 'dotenv'
import connectDb from "./config/db.js"
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"

let port = process.env.PORT || 6000

let app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: ["http://localhost:5173", "http://localhost:5174"], credentials:true })) // Enable CORS for all routes with credentials support


app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
//productRoute
app.use("/api/product",productRoutes)

app.get("/",(req,res)=>{
  
  res.send("Hellow from server")
})


app.listen(port, async () => {
  console.log("Hello from Server")
   connectDb() 
 
})


