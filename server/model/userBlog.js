const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    content: String,
  },
  {
    timestamps: true,
  }
);

const blogModel = new mongoose.model("Blog", blogSchema);

module.exports = blogModel
