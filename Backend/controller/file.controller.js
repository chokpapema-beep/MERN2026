export const singleFileController = async (req, res, next) => {
  try {
    const file = req.file.filename;
    res.status(200).json({
      message: "File uploaded successfully",
      url: `http:localhost:4000/${file}`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
