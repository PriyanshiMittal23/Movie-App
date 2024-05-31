import mongoose from "mongoose";

const connectToMongoDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Database Connected");
    }
    catch(err){
        console.log("error occurred while connecting db",err.message);
    }
}

export default connectToMongoDB;