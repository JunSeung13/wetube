import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import usersRouter from "./routers/usersRouter";
import videosRouter from "./routers/videosRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express()

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(routes.home, globalRouter);
app.use(routes.users, usersRouter);
app.use(routes.videos, videosRouter);

export default app;