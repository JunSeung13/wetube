import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controllers/userController";

const usersRouter = express.Router();

// usersRouter.get(routes.users, users);
usersRouter.get(routes.editProfile, editProfile);
usersRouter.get(routes.changePassword, changePassword);
usersRouter.get(routes.userDetail(), userDetail);

export default usersRouter;