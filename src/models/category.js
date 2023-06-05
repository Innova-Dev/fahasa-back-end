import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
  },
  image: {
    type: String,
  }
});

export default mongoose.model("Category", categorySchema);
