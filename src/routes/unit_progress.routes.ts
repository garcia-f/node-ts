import { Router } from "express";
import UnitProgressController from "../controllers/unit_progress.controller";


const {
    createUnitProgress,
    updateUnitProgress,
    deleteUnitProgress
} = UnitProgressController;

const router = Router();

router.post("/", createUnitProgress);
router.put("/:idUser/:idUnit", updateUnitProgress);
router.delete("/:id", deleteUnitProgress);

export default router;