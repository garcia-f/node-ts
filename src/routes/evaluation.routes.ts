import { Router } from "express";
import EvaluationController from "../controllers/evaluation.controller";


const {
    evaluation,
    unitEvaluation
} = EvaluationController;

const router = Router();

router.post("/theme", evaluation)
router.post("/unit", unitEvaluation)

export default router