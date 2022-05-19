import express from "express";
import {see, edit, deleteVideo, upload} from "../controllers/videoController"

const videoRouter = express.Router();


//업로드를 최상단에 위치하게 해 놓는 것이 중요함.
videoRouter.get("upload", upload);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/:id", see);



export default videoRouter;