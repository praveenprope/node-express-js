// Import the mongoose library to interact with MongoDB
import mongoose from "mongoose";

// Define the schema for the User model
// A schema represents the structure of documents in a collection
const userSchema = new mongoose.Schema(
  {
    // 'name' field - A string field, required to be provided when creating a user
    name: {
      type: String, // The data type of the field is String
      required: true, // This field must be present (validation rule)
    },

    // 'username' field - A string field, also required
    username: {
      type: String, // The data type of the field is String
      required: true, // This field must be present (validation rule)
    },

    // 'email' field - A string field that must be unique
    email: {
      type: String, // The data type of the field is String
      required: true, // This field must be present (validation rule)
      unique: true, // This ensures that the email value is unique across all users
    },

    // 'password' field - A string field, required to store user passwords
    password: {
      type: String, // The data type of the field is String
      required: true, // This field must be present (validation rule)
    },
  },
  {
    // Enable timestamps to automatically add `createdAt` and `updatedAt` fields
    timestamps: true,
  }
);

// Create the User model from the schema
// The first argument 'User' is the singular name of the collection in MongoDB
// Mongoose automatically converts it to lowercase and pluralizes it to create the 'users' collection
export const UserModel = mongoose.model("User", userSchema);

// Export the model so it can be used in other files to interact with the database
