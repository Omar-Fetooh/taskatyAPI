import Task from "../../../database/models/task.model.js";
import { AppError } from "../../utils/error.js";

const taskMiddleware = async (req, res, next) => {
    const task = await Task.findById(req.params.categoryId);
    if (task.userId.toString() != req.user.id)
        throw new AppError('Sorry, you dont own this Task', 400)

    next()
}

export default taskMiddleware