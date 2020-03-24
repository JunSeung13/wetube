import express from "express";
import routes from "../routes";

const videosRouter = express.Router();

videosRouter.get(routes.videos, (req, res) => res.send("Videos"));
videosRouter.get(routes.upload, (req, res) => res.send("Upload"));
videosRouter.get(routes.videoDetail, (req, res) => res.send("Video Detail"));
videosRouter.get(routes.editVideo, (req, res) => res.send("Edit Video"));
videosRouter.get(routes.deleteVideo, (req, res) => res.send("Delet Video"));

export default videosRouter;