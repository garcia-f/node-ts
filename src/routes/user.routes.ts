import { Router } from "express";
import UserController from "../controllers/user.controller";


const {
    ctrlGetAllUsers,
    ctrlGetOneUser,
    ctrlCreateUser,
    ctrlUpdateUser,
    ctrlDeleteUser
} = UserController;


const router = Router();

router.get('/', ctrlGetAllUsers);
router.get('/:id', ctrlGetOneUser);
router.post('/', ctrlCreateUser);
router.put('/:id', ctrlUpdateUser);
router.delete('/:id', ctrlDeleteUser);


export default router;