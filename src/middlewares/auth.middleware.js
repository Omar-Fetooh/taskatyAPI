import jwt from 'jsonwebtoken'
import { AppError } from '../utils/error.js';

export const auth = (req, res, next) => {
    // Authentication
    const { token } = req.headers;
    if (!token) throw new AppError('Please SignIn', 401)


    // Authorization
    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) throw new AppError('Invalid Token', 498)

        req.user = decoded;
        next();
    })
}
