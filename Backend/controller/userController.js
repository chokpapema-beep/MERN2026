import { User } from "../schema/user.schema.js";
import { hashPassword, verifyPassword } from "../utils/bcrypt.js";
import { generateToken, verifyToken } from "../utils/jwt.js";
import { sendMail } from "../utils/nodemailer.js";

export const createUserController = async (req, res) => {
  try {
    let data = req.body;

    data = {
      ...data,
      password: await hashPassword(data.password),
    };

    const result = await User.create(data);

    const token = await generateToken({
      payload: {
        email: result.email,
        id: result._id,
      },
      expiryTime: "1h",
    });

    sendMail({
      email: result.email,
      subject: "Verify Your Email Address",
      html: `
      <h6>Hello ${result.username},</h6>  
      </br>
      <p>Thanks for registering an account with us! Please verify your account with us</p>
      <a href=http://localhost:8080/user/verify?token=${token}>
      <button style="border: none; background-color: blue; color: white; padding-top: 5px; padding-bottom: 5px; padding-right: 10px; padding-left:10px;">Verify</button>
      </a>
      `,
    }); // argument passes ram@gmail.com

    res.status(201).json({
      message: "User registered successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const verifyUser = async (req, res) => {
  try {
    let token = req.query.token;

    const verifiedToken = await verifyToken(token);

    const id = verifiedToken.id;

    const result = await User.findByIdAndUpdate(
      id,
      {
        isVerified: true,
      },
      { new: true }
    );

    res.status(200).json({
      message: "User verified successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      err: error.message,
    });
  }
};
 
export const loginUserController = async (req, res) => {
  try {
    const isValidemail = await User.findOne({email: req.body.email});

    if (!isValidemail) 
    res.status(400).json({ 
      message: "Invalid credential",
   });
 if (!isValidemail.isVerified){
  res.status(404).json({
    message: "please verify your account first",
  });
 }

    const isValidPassword = await verifyPassword({
      hashedPassword: isValidemail.password,
      plainPassword: req.body.password,
    })
    if (!isValidPassword){
      res.status(404).json({
        message: "invalid credential"
      });
    }
    const token = await generateToken({
      payload: {
        id:isValidemail.id,
       },
       expiryTime: "30d",
    });

    res.status(200).json({
       message: "Login Successful", 
       data: isValidemail,
      token:token });
  } catch (error) {
    res.status(500).json({ 
      message: "Internal Server Error", 
      error: error.message });
  }
};

 export const forgetPassword = async (req,res) => {
  try {
    let email = req.body.email;
    const isValidemail =await User.findOne({ email:email});

    if(!isValidemail){
      res.status(400).json({
        message: "Account with this email dose not exist",
      });
    }
    const token = await generateToken({
      payload:{
        id:isValidemail.id,
        reason:"Reset Password"
      },
      expiryTime:"1h"
    })
    const result = await sendMail({
      email:req.body.email,
      subject: "Password reset link",
      html:`<p>You requested for a password reset</p> </br> <a href=http://localhost:8080/user/reset-password?token=${token}>
      http://localhost:8080/user/reset-password?token=${token}</a>`,
  });
    res.status(200).json({
      message:"Password reset link sent to user",
      data:result,
    })
    
  } catch (error) {
    res.status(200).json({
      message:"Internal server error",
      error:error.message
});
}
 }
export const resetPassword = async(req,res) => {
  try {
    const token = req.query.token;  //?token=
    const verifiedToken = await verifyToken(token);
    console.log(verifiedToken);

    const id = verifiedToken.id;

    const hashedPassword = await hashPassword(req.body.password);

    if (verifiedToken.reason !=="Reset Password"){
      res.status(401).json({
        message:"invalid token"
      });
    }else{

    }
    const result = await User.findByIdAndUpdate(
      id,
      {password:hashedPassword},
      {new: true}
    );
    res.status(200).json({
      success:true,
      meassage:"Password reset successful",
      data: result,
    });
    
  } catch (error) {
    res.status(500).json({
      message:"Server internal error"
    });
  
  }
}


export const updateUser = async (req, res) => {
   try {
     const data = req.body;
     delete data.password;

     const id = req.userId;
   

     const result = await User.findByIdAndUpdate(id, data, { new: true });
     res.status(200).json({ 
       message: "User updated successfully",
        data: result });
   } catch (error) {
     res.status(500).json({
        message: "Internal Server Error", 
        error: error.message });
   }
 };
 