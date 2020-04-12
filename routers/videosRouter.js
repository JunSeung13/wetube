import express from "express";
import routes from "../routes";
import { videoDetail, editVideo, deleteVideo, postUpload, getUpload } from "../controllers/videoController";

const videosRouter = express.Router();

// videosRouter.get(routes.videos, videos);
videosRouter.get(routes.upload, getUpload);
videosRouter.post(routes.upload, postUpload);

videosRouter.get(routes.videoDetail(), videoDetail);
videosRouter.get(routes.editVideo, editVideo);
videosRouter.get(routes.deleteVideo, deleteVideo);

export default videosRouter;