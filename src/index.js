import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import mongoose from "mongoose";
// import {DB_name} from "./constants.js";

dotenv.config({
    path: "./env"
});



connectDB();







// import express from "express";
// const app = express();


/*
(async () =>{
    try{
        awaitmongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        app.on("error", (error) => {
            console.log("Error in DB connection", error);
            throw error;
        });
        app.listen(process.env.port, () => {
            console.log(`Server is running on port ${process.env.port}`);
        });
    }catch(error){
        console.log("ERROr: ",error);
        throw error;
    }

})
*/