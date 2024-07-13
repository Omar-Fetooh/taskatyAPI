import Category from "../../../database/models/category.model.js";
import { AppError } from "../../utils/error.js";

const catMiddleware = async (req, res, next) => {
    const category = await Category.findById(req.params.categoryId);
    if (category.userId.toString() != req.user.id)
        throw new AppError('Sorry, you dont own this category', 400)

    next()
}

export default catMiddleware