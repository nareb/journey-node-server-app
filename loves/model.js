import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("loves", schema);
export default model;
