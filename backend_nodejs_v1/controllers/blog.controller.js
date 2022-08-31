// install necessary modules
const Blog = require('../models/blog.model');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utilities/errorResponse');

// @desc    Get all blogs
// @route   GET /api/v1/blogs
// @access  Public
exports.getAllBlogs = asyncHandler(async(req, res, next) => {
    const blog = await Blog.find();

    if(!blog)
        return next(new ErrorResponse(`Blogs not found`, 404));
    

    res
        .status(200)
        .json({ success: true, count: blog.length, data: blog });
});

// @desc    Get blog by id
// @route   GET /api/v1/blogs/:id
// @access  Public
exports.getBlogById = asyncHandler(async(req, res, next) => {
    const blog = await Blog.findById(req.params.id);

    if(!blog)
        return next(new ErrorResponse(`Blog with id '${req.params.id}' not found`, 400));

    res
        .status(200)
        .json({ success: true, data: blog });
});

// @desc    Create a new blog
// @route   POST /api/v1/blogs
// @access  Public
exports.createBlog = asyncHandler(async(req, res, next) => {
    const blog = await Blog.create(req.body);

    if(!blog)
        return next(new ErrorResponse(`Blog with id '${req.params.id}' not found`, 404));

    res
        .status(201)
        .json({ success: true, message: 'Blog created successfully', data: blog});
});

// @desc    Update blog by id
// @route   PUT /api/v1/blogs/:id
// @access  Public
exports.updateBlogById = asyncHandler(async(req, res, next) => {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if(!blog)
        return next(new ErrorResponse(`Blog with id '${req.params.id}' not found`, 404));

    res
        .status(200)
        .json({ success: true, message: `Blog with id '${req.params.id}' updated successfully`, data: blog });
});

// @desc    Delete blog by id
// @route   DELETE /api/v1/blogs/:id
// @access  Public
exports.deleteBlogById = asyncHandler(async(req, res, next) => {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if(!blog)
        return next(new ErrorResponse(`Blog with id '${req.params.id}' not found`, 404));

    res
        .status(200)
        .json({ success: true, message: `Blog with id '${req.params.id}' deleted successfully` });
});