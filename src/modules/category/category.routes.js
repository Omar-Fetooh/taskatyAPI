import { Router } from "express";

import { addCategory, deleteCatById, filterCategoryByName, getAllCategories, sortByCategoryName, updateCatById } from "./category.controllers.js";
import { auth } from "../../middlewares/auth.middleware.js";
import catMiddleware from "./category.middleware.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { addCategorySchema } from "./category.validations.js";

const categoryRouter = Router();

categoryRouter.route('/')
    .get(auth, getAllCategories)
    .post(auth, validate(addCategorySchema), addCategory)

categoryRouter.route('/:categoryId')
    .put(auth, validate(addCategorySchema), catMiddleware, updateCatById)
    .delete(auth, validate(addCategorySchema), catMiddleware, deleteCatById);

categoryRouter.get('/filter', auth, filterCategoryByName)
categoryRouter.get('/sort', auth, sortByCategoryName)

export default categoryRouter