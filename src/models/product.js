import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
    minLength: 3,
  },
  list_price: {
    type: Number,
  },
  original_price:{
    type: Number,
  },
  images:[
    {body:String}
  ],
  description: {
    type:String,
  },
});

export default mongoose.model("Product", productSchema);
