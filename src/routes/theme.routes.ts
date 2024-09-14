import { Router } from "express";
import ThemeController from "../controllers/theme.controller";


const {
    getAllThemes,
    getOneTheme,
    createTheme,
    updateTheme,
    deleteTheme
} = ThemeController;

const router = Router();

router.get("/", getAllThemes);
router.get("/:id", getOneTheme);
router.post("/", createTheme);
router.put("/:id", updateTheme);
router.delete("/:id", deleteTheme);

export default router;