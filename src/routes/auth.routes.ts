import { Router } from 'express';
import AuthController from '../controllers/auth.controller';


const {
    register,
    login
} = AuthController;

const authRoutes = Router()

authRoutes.post('/register', register)
authRoutes.post('/login', login)

export default authRoutes