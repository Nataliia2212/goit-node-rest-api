import Joi from "joi";

import { emailRegexp, subscription } from "../constans/user-constans.js";

export const userSignupSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...subscription),
});

export const userSigninSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...subscription),
});

export const userUpdateSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp),
  password: Joi.string().min(6),
  subscription: Joi.string().valid(...subscription),
});
