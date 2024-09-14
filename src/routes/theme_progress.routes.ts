import { Router } from 'express';
import ThemeProgressController from '../controllers/theme_progress.controller';


const {
    getAllUserThemeProgress,
    createThemeProgress,
    updateThemeProgress,
    deleteThemeProgress
} = ThemeProgressController;

const router = Router();

router.get("/:idUser", getAllUserThemeProgress);
router.post("/", createThemeProgress);
router.put("/:idProgress/:idTheme", updateThemeProgress);
router.delete("/:id", deleteThemeProgress);

export default router;