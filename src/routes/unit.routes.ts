import { Router } from "express";
import UnitController from "../controllers/unit.controller";


const {
    getAllUnits,
    getOneUnit,
    createUnit,
    updateUnit,
    deleteUnit
} = UnitController;

const router = Router();

router.get('/', getAllUnits);
router.get('/:id', getOneUnit);
router.post('/', createUnit);
router.put('/:id', updateUnit);
router.delete('/:id', deleteUnit);

export default router;