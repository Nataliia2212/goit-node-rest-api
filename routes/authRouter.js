import express from "express";

import authControllers from "../controllers/authControllers.js";

import isEmptyBody from "../middlewares/isEmptyBody.js";

import {
  userSigninSchema,
  userSignupSchema,
  userUpdateSchema,
} from "../schemas/authSchemas.js";

import validateBody from "../decorators/validateBody.js";

import authenticate from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  isEmptyBody,
  validateBody(userSignupSchema),
  authControllers.signup
);

authRouter.post(
  "/login",
  isEmptyBody,
  validateBody(userSigninSchema),
  authControllers.signin
);

authRouter.post("/logout", authenticate, authControllers.signout);

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.patch(
  "/",
  authenticate,
  isEmptyBody,
  validateBody(userUpdateSchema),
  authControllers.updateUser
);

export default authRouter;
