const blogModel = require("../model/userBlog");

const addBlogs = async (req, res) => {
  try {
    const { title, content, userId } = req.body;
    const data = await blogModel.create({ title, content, userId });

    res.status(201).json({
      message: "Blog saved Successfully",
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



module.exports = addBlogs;
