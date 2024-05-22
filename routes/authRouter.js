import express from "express";

import authControllers from "../controllers/authControllers.js";

import isEmptyBody from "../middlewares/isEmptyBody.js";
import upload from "../middlewares/upload.js";

import {
  userEmailSchema,
  userSigninSchema,
  userSignupSchema,
  userUpdateSchema,
} from "../schemas/authSchemas.js";

import validateBody from "../decorators/validateBody.js";

import authenticate from "../middlewares/authenticate.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  upload.single("avatar"),
  isEmptyBody,
  validateBody(userSignupSchema),
  authControllers.signup
);

authRouter.get("/verify/:verificationToken", authControllers.verify);

authRouter.post(
  "/verify",
  isEmptyBody,
  validateBody(userEmailSchema),
  authControllers.resendEmail
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

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatarURL"),
  authControllers.updateAvatar
);

export default authRouter;
