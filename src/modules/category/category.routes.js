import { Router } from "express";

import { addCategory, deleteCatById, filterCategoryByName, getAllCategories, sortByCategoryName, updateCatById } from "./category.controllers.js";
import { auth } from "../../middlewares/auth.middleware.js";
import catMiddleware from "./category.middleware.js";

const categoryRouter = Router();

categoryRouter.route('/').get(auth, getAllCategories).post(auth, addCategory)

categoryRouter.route('/:categoryId')
    .put(auth, catMiddleware, updateCatById)
    .delete(auth, catMiddleware, deleteCatById);

categoryRouter.get('/filter', auth, filterCategoryByName)
categoryRouter.get('/sort', auth, sortByCategoryName)

export default categoryRouter