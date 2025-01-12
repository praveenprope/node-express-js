const Blog = require("../models/Blog");

// Get all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs", error });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newBlog = new Blog({ title, content, author });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: "Failed to create blog", error });
  }
};

// Get a blog by ID
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blog", error });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog", error });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog", error });
  }
};

module.exports = {
  getBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
