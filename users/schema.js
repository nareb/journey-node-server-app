import mongoose from "mongoose";

const statusSchema = new mongoose.Schema(
  {
    status: String,
    createdAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const schema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: String,
    role: {
      type: String,
      enum: ["ADMIN", "USER", "FACULTY", "STUDENT"],
      default: "USER",
    },
    salary: { type: Number, default: 75000 },
    married: { type: Boolean, default: false },
    dob: Date,
    doh: { type: Date, default: Date.now },
    firstName: String,
    lastName: String,
    statuses: [statusSchema], // Add this line to include the statuses field
  },
  { collection: "users" }
);
export default schema;