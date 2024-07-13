import { Router } from "express";

import { addCategory, deleteCatById, getAllCategories, updateCatById } from "./category.controllers.js";
import { auth } from "../../middlewares/auth.middleware.js";
import catMiddleware from "./category.middleware.js";

const categoryRouter = Router();

categoryRouter.route('/').get(auth, getAllCategories).post(auth, addCategory)

categoryRouter.route('/:categoryId')
    .put(auth, catMiddleware, updateCatById)
    .delete(auth, catMiddleware, deleteCatById);


export default categoryRouter