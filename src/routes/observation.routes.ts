import { Router } from 'express';
import observationController from '../controllers/observation.controller';


const {
    createObservation,
    updateObservation,
    deleteObservation
} = observationController;


const router = Router();

router.post("/", createObservation);
router.put("/:id", deleteObservation);
router.delete("/:id", updateObservation);

export default router;