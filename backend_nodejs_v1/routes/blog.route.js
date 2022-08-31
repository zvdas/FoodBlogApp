// import necessary modules
const express = require('express');

const {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlogById,
    deleteBlogById
} = require('../controllers/blog.controller');

const router = express.Router();

router
    .route('/')
    .get(getAllBlogs)
    .post(createBlog);

router
    .route('/:id')
    .get(getBlogById)
    .put(updateBlogById)
    .delete(deleteBlogById);

module.exports = router;