import mongoose from "mongoose"

export const connectDatabase = async() => {
    try {
        const result= await mongoose.connect("mongodb://localhost:27017//MERN")

        console.log("Database connected successfully")
        
    } catch (error) {
        console.log(error)
        
    }
}
