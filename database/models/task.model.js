import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['text', 'list'],
        required: true,
    },
    content: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    isShared: {
        type: Boolean,
        default: false
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'category',
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
    }
})

const Task = mongoose.model('task', taskSchema)
export default Task;