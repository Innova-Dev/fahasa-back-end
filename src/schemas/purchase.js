import Joi from 'joi';

const purchaseSchema = Joi.object({
    items: Joi.array().items(Joi.object({
        name: Joi.string(),
        list_price: Joi.number(),
        original_price: Joi.number(),
        images: Joi.array().items(Joi.string()),
        description: Joi.string(),
        total: Joi.number(),
    })).required(),
    totalPayment: Joi.number().required(),
    address: Joi.string().required(),
    user: Joi.string().required(),
});

export default purchaseSchema;
