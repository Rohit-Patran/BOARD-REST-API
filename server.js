//importing packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/routes.js";
import mongoose from "mongoose";

//environment variables config
dotenv.config();

//server setup
const APP = express();
const PORT = process.env.PORT;

//middlewares
APP.use(express.json());
APP.use(cors());


//routes
APP.use(router);

//Database connection
const db_URI = process.env.db_URI;
mongoose.connect(db_URI)
.then(() => {

    //listen to PORT
    APP.listen(PORT , () => {
    console.log(`server running on port: ${PORT}`)
    });
})
.catch(
    error => {
        console.error("ERROR:" + error);
    }
)
