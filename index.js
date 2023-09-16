import express from "express";
import Connection from "./database/db.js";
import cors from 'cors';
import Routes from "./routes/route.js";

const app=express();

const PORT=8000;
Connection();

app.use(cors());
app.use(express.json())

app.use('/',Routes)
app.use('/',(req,res)=>{
    res.send("Welcome to todo app")
})


app.listen(PORT,()=>{
    console.log(`APP IS STARTED AT PORT ${PORT}`)
})