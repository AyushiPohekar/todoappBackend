import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const username=process.env.Db_name;
const password=process.env.Db_password;


const Connection=()=>{

const MONGO_URI=`mongodb+srv://${username}:${password}@cluster0.pvgxw4g.mongodb.net/todo?retryWrites=true&w=majority`

    mongoose.connect(MONGO_URI,{useNewUrlParser:true});

    mongoose.connection.on("connected",()=>{
   console.log('Database connected successfully')
    })
    mongoose.connection.on("Disconnected",()=>{
        console.log("Database disconnected")
    })
    mongoose.connection.on("error",()=>{
        console.log("Error while connecting database",error.message)
    })
}
export default Connection
