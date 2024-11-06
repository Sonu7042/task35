const express = require("express");

const router = express.Router();

const saveUser = require("../controller/addUser");
const addBlogs = require("../controller/addBlog");
const showBlog = require("../controller/showBlog");

router.post("/user", saveUser);
router.post("/blog", addBlogs);
router.get("/display", showBlog);

module.exports = router;
