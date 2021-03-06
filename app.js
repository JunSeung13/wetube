import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localMiddleware } from "./middlewares";
import routes from "./routes";
import usersRouter from "./routers/usersRouter";
import videosRouter from "./routers/videosRouter";
import globalRouter from "./routers/globalRouter";

const app = express()

app.use(helmet());
app.set("view engine","pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan("dev"));

app.use(localMiddleware)

app.use(routes.home, globalRouter);
app.use(routes.users, usersRouter);
app.use(routes.videos, videosRouter);

export default app;