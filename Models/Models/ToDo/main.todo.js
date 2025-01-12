import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    tittle: {
        type: String, // The field's data type is a string
        required: true, // Validation to ensure the field is present with a custom error message
        unique: true,
    }
}, { timestamps });

export const mainTodo = mongoose.model('mainTodo', todoSchema)