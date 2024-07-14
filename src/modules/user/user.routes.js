import { Router } from "express";
import { signin, signup, verifyEmail } from "./user.controllers.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { signinSchema, signupSchema } from "./user.validations.js";

const userRouter = Router();

userRouter.post('/signup', validate(signupSchema), signup)
userRouter.post('/signin', validate(signinSchema), signin)
userRouter.get('/verify/:token', verifyEmail)

export default userRouter