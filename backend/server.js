import app from "./app.js";

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req,res)=>{
res.send("server working");
});

app.listen(process.env.PORT,()=>{
    console.log(`Server running on Port : ${process.env.PORT}`)
})