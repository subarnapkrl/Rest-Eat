import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"Restaurant"
    })
    .then(()=>{
        console.log("Connected to  database successfully!")
    })
    .catch((error)=>{
        console.log(`Error occurred as ${error}`)
    })
}