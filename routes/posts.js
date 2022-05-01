const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

router.post('/', async(req, res, next) =>  {
  try {
    const {name, content, img} = req.body
    if(!content){
      throw "貼文內容未填寫"
    }
    const newPost = await Post.create({name, content, img})
    res.status(200).json({
      status: "success",
      data: newPost
    })
  } catch (error) {

    res.status(400).json({
        status: 'false',
        message: error  || "欄位未填寫正確，或無此 todo ID"
    });
  }
})


module.exports = router;

