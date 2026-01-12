import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/env.js"

export const generateToken = async ({payload, expiryTime}) => {

    const result = await jwt.sign(payload, SECRET_KEY, { expiresIn: expiryTime});
    return result;
}
 export const verifyToken = async (token) => {
    const result = await jwt.verify(token, SECRET_KEY);
    return result;
}


// console.log(process.env.SECRET_KEY);
// export const generateToken = async() => {
//     let infoObj = {
//         email: "chokpapema@gmail.com",
//         message: "Yo message ma store bako message ho",
//     };

// const result = await jwt.sign(infoObj, SECRET_KEY,{ expiresIn: "1h"});
// console.log(result);
// };
// generateToken();

// export const verifyToken = async () => {
//     const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNob2twYXBlbWFAZ21haWwuY29tIiwibWVzc2FnZSI6IllvIG1lc3NhZ2UgbWEgc3RvcmUgYmFrbyBtZXNzYWdlIGhvIiwiaWF0IjoxNzY1NTQyMzY0LCJleHAiOjE3NjU1NDU5NjR9.ks47NRudPpo1tt7JOAONji4xmLZy7cYZluF98DZpXfI"
//     const result = await jwt.verify(token, SECRET_KEY);
//     console.log(result);

// };
//  verifyToken();