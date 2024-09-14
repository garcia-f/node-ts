import { Router } from "express";
import ProgressController from "../controllers/progress.controller";


const {
    getUserProgress
} = ProgressController;

const router = Router();

router.get("/:id", getUserProgress);

export default router;