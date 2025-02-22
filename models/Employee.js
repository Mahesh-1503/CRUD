// Models handle database operations.

const mongoose = require("mongoose");

// Define Employee Schema
const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true },
    city: { type: String, required: true },
  },
  { timestamps: true }
); // Adds createdAt & updatedAt automatically

// Export Model
module.exports = mongoose.model("Employee", employeeSchema);
