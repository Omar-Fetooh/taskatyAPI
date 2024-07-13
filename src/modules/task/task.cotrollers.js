import mongoose from 'mongoose'
import Task from "../../../database/models/task.model.js"
import { catchAsyncError } from "../../utils/error.js";

export const getAllTasks = catchAsyncError(async (req, res) => {
    const tasks = await Task.find().populate('categoryId');
    res.json({ message: tasks })
})

export const addTask = catchAsyncError(async (req, res) => {
    const { title, type, content, isShared, categoryId } = req.body;
    const data = await Task.create({
        title, type, content, isShared, categoryId,
        userId: req.user.id
    })
    res.status(201).json({ message: "Task Added Successfully", data })
})

export const updateTaskById = catchAsyncError(async (req, res) => {
    const data = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true })
    res.json({ message: "Task Updated Successfully", data })
})

export const deleteTaskById = catchAsyncError(async (req, res) => {
    await Task.findByIdAndDelete(req.params.taskId, req.body)
    res.json({ message: "Task Deleted Successfully" })
})

export const filterByTaskSharedOption = catchAsyncError(async (req, res) => {
    const { isShared } = req.query;
    const filtered = await Task.find({ isShared })
    res.json({ message: filtered })
})
