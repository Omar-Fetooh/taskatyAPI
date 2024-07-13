import express from 'express'

import './database/dbConnection.js'
import { AppError } from './src/utils/error.js';
import userRouter from './src/modules/user/user.routes.js';
import categoryRouter from './src/modules/category/category.routes.js';
import tasksRouter from './src/modules/task/task.routes.js';

process.on('uncaughtException', () => {
    console.log('error')
})

const app = express()
const port = 3000

app.use(express.json());

app.use('/users', userRouter)
app.use('/categories', categoryRouter)
app.use('/tasks', tasksRouter)


app.use('*', (req, res, next) => {
    next(new AppError(req.originalUrl + ' Not Found', 404))
})

app.use((err, req, res, next) => {
    const { message, statusCode } = err;
    res.status(statusCode || 500).json(message)
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


process.on('unhandledRejection', () => [
    console.log("error")
])