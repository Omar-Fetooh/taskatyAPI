import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../../../database/models/user.model.js'
import { AppError, catchAsyncError } from '../../utils/error.js';

export const signup = catchAsyncError(async (req, res) => {
    const { email, name, password } = req.body;

    const user = await User.findOne({ email });
    if (user) throw new AppError('Sorry ,But Email Already Exists', 400)

    const hashedPassword = bcrypt.hashSync(password, 8);
    await User.create({ name, email, password: hashedPassword })

    res.status(201).json({ message: 'Signed Up Successfully' });
})

export const signin = catchAsyncError(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new AppError('Sorry Invalid Credintails', 400)

    const isMatched = bcrypt.compareSync(password, user.password)
    if (!isMatched) throw new AppError('Sorry Invalid Credintails', 400)

    const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, 'secret')
    res.json({ token })
})
