import { User } from "../schema/user.schema.js";

export const isAuthorized = (role) => {
  return async (req, res, next) => {
    try {
      const id = req.userId;

      const user = await User.findById(id);
      

      if (!role.includes(user.role)) { // includes le diyeko value array ko list ma xa ki nai vaneyra check garxa?
        res.status(403).json({
          message: "You are not authorized",
        });
      }else{
      next();
      }
    } catch (error) {
        console.log(error.message);
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };
};
