import Joi from "joi";

export const addCategorySchema = Joi.object({
    name: Joi.string().required(),
})
