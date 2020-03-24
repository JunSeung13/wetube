import express from "express";
import routes from "../routes";

const usersRouter = express.Router();

usersRouter.get(routes.users, (req,res) => res.send("Users"));
usersRouter.get(routes.userDetail, (req,res) => res.send("User Detail"));
usersRouter.get(routes.editProfile, (req,res) => res.send("Edit Profile"));
usersRouter.get(routes.changePassword, (req,res) => res.send("Change Password"));

export default usersRouter;