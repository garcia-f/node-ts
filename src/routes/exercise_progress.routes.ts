import { Router } from 'express';
import ExerciseProgressController from '../controllers/exercise_progress.controller';


const {
    createExerciseProgress,
    updateExerciseProgress,
    deleteExerciseProgress
} = ExerciseProgressController;

const router = Router();

router.post("/", createExerciseProgress);
router.put("/:id", deleteExerciseProgress);
router.delete("/:id", updateExerciseProgress);

export default router;
