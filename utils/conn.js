import mongoose from "mongoose";

const connectDb = async()=>{
    mongoose.connect(process.env.MONGODB_URI).then(()=>{
        console.log("connected to mongodb atlas");
    }).catch((e)=>{
        console.log(e)
    })
}

export default connectDb;
