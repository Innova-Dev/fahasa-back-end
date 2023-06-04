import Joi from "joi";
const productSchema = Joi.object({
  name: Joi.string(),
  list_price: Joi.number(),
  original_price:Joi.number(),
  images: Joi.array().items(Joi.object({
    type: Joi.string(),
    url: Joi.string()
  })),
  description: Joi.string(),

});

export default productSchema;
