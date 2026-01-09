
import { verifyToken } from "../utils/jwt.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
  if (!bearerToken){
    res.status(400).json({
      message: "Token is missing",
    })
  }
  
    const token = bearerToken.split(" ")[1]; // e.g Bearer edjjdjhkjhdf.....
   
      
    const verifiedToken = await verifyToken(token);

    if (!verifiedToken) {
      res.status(401).json({
        message: "Invalid Token",
      });
    }

    req.userId = verifiedToken.id;
    req.token=token;

    next();
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

 