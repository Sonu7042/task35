const blogModel = require("../model/userBlog");

const showBlog = async (req, res) => {
  try {
    const data = await blogModel.find().populate("userId");

    res.status(201).json({
      message: "Blog got Successfully",
      error: false,
      success: true,
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || err,
      success: false,
      error: true,
    });
  }
};



module.exports = showBlog;
