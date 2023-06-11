import Joi from "joi";
const productSchema = Joi.object({
  name: Joi.string(),
  list_price: Joi.number(),
  original_price:Joi.number(),
  images: Joi.array(),
  description: Joi.string(),

});

export default productSchema;
