import { Router } from "express";
import { signin, signup } from "./user.controllers.js";
import { validate } from "../../middlewares/validate.middleware.js";
import { signinSchema, signupSchema } from "./user.validations.js";

const userRouter = Router();

userRouter.post('/signup', validate(signupSchema), signup)
userRouter.post('/signin', validate(signinSchema), signin)

export default userRouter