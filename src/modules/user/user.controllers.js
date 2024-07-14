import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../../../database/models/user.model.js'
import { AppError, catchAsyncError } from '../../utils/error.js';
import { transporter } from '../../utils/email.js';

export const signup = catchAsyncError(async (req, res) => {
    const { email, name, password } = req.body;

    const user = await User.findOne({ email });
    if (user) throw new AppError('Sorry ,But Email Already Exists', 400)

    const hashedPassword = bcrypt.hashSync(password, 8);
    await User.create({ name, email, password: hashedPassword })

    const token = jwt.sign({ email }, 'secret2')

    await transporter.sendMail({
        to: email,
        subject: "Verify Your Email", // Subject line
        html: `<a href='http://localhost:3000/auth/verify/${token}'>Click here to confirm your email</a>`, // html body
    })

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

export const verifyEmail = catchAsyncError(async (req, res) => {
    const token = req.params.token;

    jwt.verify(token, 'secret2', async (err, decoded) => {
        // if (err) return res.status(400).json({ message: "Invalid Token" })  OLD WAY
        if (err) throw new AppError("Invalid Token", 400)

        await User.findOneAndUpdate({ email: decoded.email }, { emailConfirmed: true })
        res.json({ message: "Email Confirmed Successfully" })
    })
})