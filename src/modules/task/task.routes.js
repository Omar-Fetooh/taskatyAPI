import { Router } from 'express'
import { addTask, deleteTaskById, getAllTasks, updateTaskById } from './task.cotrollers.js';
import { auth } from '../../middlewares/auth.middleware.js';
import taskMiddleware from './task.middleware.js';

const tasksRouter = Router();

tasksRouter.route('/').get(auth, getAllTasks).post(auth, addTask)

tasksRouter.route('/:taskId')
    .put(auth, taskMiddleware, updateTaskById)
    .delete(auth, taskMiddleware, deleteTaskById)

export default tasksRouter