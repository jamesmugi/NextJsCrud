import mongoose from "mongoose";

export const connectDb=async ()=>{
  try {
    mongoose.connect(process.env.MONGO_DB)
  } catch (error) {
    throw new Error("Error connection to the database")
  }
}