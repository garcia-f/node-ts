import { Router } from "express";
import ExerciseController from "../controllers/exercise.controller";


const {
    getAllExercises,
    getOneExercise,
    createExercise,
    updateExercise,
    deleteExercise
} = ExerciseController;

const router = Router();

router.get("/", getAllExercises);
router.get("/:id", getOneExercise);
router.post("/", createExercise);
router.put("/:id", updateExercise);
router.delete("/:id", deleteExercise);

export default router;