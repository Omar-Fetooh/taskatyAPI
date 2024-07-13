import Joi from "joi";

export const addTaskSchema = Joi.object({
    title: Joi.string().required(),
    type: Joi.string().required(),
    content: Joi.alternatives().try(Joi.string, Joi.array()).required(),
    isShared: Joi.boolean(),
    categoryId: Joi.string()
})
