import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,"username must be sent"],
    },
    email: {
        type: String,
        required: [true,"email must be sent"],
        unique:[true,"email must be unique"],
    },
    password: {
        type: String,
        required: [true,"password must be sent"]
    },
    gender: {
        type: String,
        required: [true,"gender must be sent"]
    },
    address: {
        type: String,
        required: [true,"address must be sent"]
    },
    phoneNumber: {
        type: String,
        required: false
    }
});

 export const User=mongoose.model("User",userSchema)

 