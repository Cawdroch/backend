// Import Modlues

const mongoose = require("mongoose");

// Create schema

const taskSchema = mongoose.Schema(
  {
    text: { type: String, required: [true, "Please add a text value"] },
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  },
  {
    timestamps: true,
  }
);

// Export module

module.exports = mongoose.model("Task", taskSchema);
