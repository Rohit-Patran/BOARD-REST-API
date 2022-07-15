import express from 'express';
import * as boardController from '../controller/controller.js';
const router = express();

router.get("/boards" , boardController.getBoards);
router.post("/boards", boardController.add_Board);
router.put("/boards/:id" , boardController.update_Board);

export { router as default };