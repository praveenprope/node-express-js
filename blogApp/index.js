const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogRoutes");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const notFoundHandler = require("./middleware/notFoundHandler");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/blogs", blogRoutes);

// Handle 404 and errors
app.use(notFoundHandler);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
