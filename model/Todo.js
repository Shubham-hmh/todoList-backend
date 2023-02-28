
const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    dueDate: { type: String },
    createdAt:{
        type:Date,
        default:Date.now
    }
}, { timestamps: true }
)


module.exports =mongoose.model("Todo",TodoSchema)