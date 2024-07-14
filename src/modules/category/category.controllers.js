import Category from "../../../database/models/category.model.js"
import { catchAsyncError } from "../../utils/error.js";

export const getAllCategories = catchAsyncError(async (req, res) => {
    const categories = await Category.find().populate('userId', '-_id -password ');
    res.json({ message: categories })
})

export const addCategory = catchAsyncError(async (req, res) => {
    const { name } = req.body;
    await Category.create({ name, userId: req.user.id })
    res.status(201).json({ message: "Category Added Successfully" })
})

export const updateCatById = catchAsyncError(async (req, res) => {
    const data = await Category.findByIdAndUpdate(req.params.categoryId, req.body, { new: true })
    res.json({ message: "Category Updated Successfully", data: data })
})

export const deleteCatById = catchAsyncError(async (req, res) => {
    await Category.findByIdAndDelete(req.params.categoryId)
    res.json({ message: "Category Deleted Successfully" })
})

export const filterCategoryByName = catchAsyncError(async (req, res) => {
    const { name } = req.query;
    const filtered = await Category.find({ name }).populate('userId', '-_id -password')
    res.json({ message: filtered })
})

export const sortByCategoryName = catchAsyncError(async (req, res) => {
    const sorted = await Category.find({}).sort({ name: 'asc' });
    res.json({ message: sorted })
})