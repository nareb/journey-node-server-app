import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    movieId: String,
    movieTitle: String,
  },
  { collection: "loves" }
);

export default schema;
