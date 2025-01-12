import mongoose from "mongoose";

// Define the schema for sub-todo items
const subTodoSchema = new mongoose.Schema(
  {
    // Title of the sub-todo
    title: {
      type: String, // Data type is String
      required: [true, "Title is required"], // Field is mandatory with a custom error message
      trim: true, // Removes leading/trailing spaces
    },

    // Description of the sub-todo
    description: {
      type: String, // Data type is String
      required: true, // Field is mandatory with a custom error message
      trim: true, // Removes leading/trailing spaces
    },

    // Task completion status
    isComplete: {
      type: Boolean, // Data type is Boolean (true/false)
      default: false, // Default value is `false` (not completed)
    }
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Create and export the SubTodo model
export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
