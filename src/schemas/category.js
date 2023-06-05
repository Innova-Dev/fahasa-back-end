import Joi from "joi";
const categorySchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string()
});

export default categorySchema;
