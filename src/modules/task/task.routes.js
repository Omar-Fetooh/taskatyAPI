import { Router } from 'express'
import {
    addTask,
    deleteTaskById,
    filterByTaskSharedOption,
    getAllTasks,
    sortByTaskSharedOption,
    updateTaskById
} from './task.cotrollers.js';

import { auth } from '../../middlewares/auth.middleware.js';
import taskMiddleware from './task.middleware.js';

const tasksRouter = Router();

tasksRouter.route('/')
    .get(auth, getAllTasks)
    .post(auth, addTask)

tasksRouter.route('/:taskId')
    .put(auth, taskMiddleware, updateTaskById)
    .delete(auth, taskMiddleware, deleteTaskById)

tasksRouter.get('/filter', auth, filterByTaskSharedOption)

tasksRouter.get('/sort', auth, sortByTaskSharedOption)
export default tasksRouter