import multer from "multer";
import path from "path";

const limits ={
  filesize:1024 *1024*1,
};
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },

  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
  const fileFilter=(req,file,callback)=>{
  let validExtension=[".jpg",".png",".jpeg",".svg",".webp",".avif"];
  let originalname=file.originalname; // user le panda.jpg upload garyo originaname le padan.jpg store garxa
  let fileExtension=path.extname(originalname);//originalname bata extension extract 

  let isValidExtension = validExtension.includes(fileExtension);
  if (isValidExtension){
    callback(null,true);
  }else{
    callback(new Error("Invalid Extension"));
  }
};

export const upload = multer({ 
  storage: storage,
  limits:limits,
  fileFilter:fileFilter,
 });
