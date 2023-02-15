const express = require("express");
const router = express.Router();
const { posts } = require("../models");



router.get("/", async (req, res) => {
  const listofPosts = await posts.findAll() ;
  res.json(listofPosts) ;
});

router.post("/", async (req, res) => {
    const { username, message } = req.body;
    const existingPost = await posts.findOne({ where: { username } });
    if (existingPost) {
      existingPost.count += 1;
      await existingPost.save();
      res.json(existingPost);
    } else {
      const post = await posts.create({ username, message, count: 1 });
      res.json(post);
    }
  });

module.exports = router;
