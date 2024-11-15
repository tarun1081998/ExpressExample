require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const userRoute = require("./routes/user.routes")

const app = express()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

app.use(express.json());

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB successfully"))
.catch((err) => console.log("MongoDB connection error:", err));

app.use('/user',userRoute)

app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`)
})