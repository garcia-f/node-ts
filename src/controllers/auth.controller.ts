import { Response, Request } from "express";

import UserService  from "../services/user.service";
import ProgressService from "../services/progress.service";
import ThemeProgressService from "../services/theme_progress.service";
import { createJWT } from "../utils/jwt";


const {
    createUser,
    getUserByUserNameOrMail,
    getUserForLogin
} = UserService;

const {
    createProgress
} = ProgressService;

const {
    createAllThemeProgressForUser
} = ThemeProgressService;


class AuthController {
    constructor() {}

    public async register(req: Request, res: Response) {
        try {
            const { username, email, password } = req.body;
            const user = await getUserByUserNameOrMail(username, email);
    
            if (user.userForName || user.userForMail) {
                return res.status(400).send({
                    status: 400,
                    message: user.userForName ? 'Usuario ya existe' : 'Email ya existe',
                })
            }
    
            // const newUser = await createUser({ username, email, password } );
    
            // if (!newUser) {
            //     return res.status(500).send({
            //         status: 500,
            //         message: 'No se ha podido registrar el usuario!'
            //     })
            // }
    
            // const userProgress = await createProgress(newUser);
    
            // if (!userProgress) {
            //     return res.status(500).send({
            //         status: 500,
            //         message: 'No se ha podido crear el progreso!'
            //     })
            // }
    
            // await createAllThemeProgressForUser(newUser);
    
            return res.status(201).send({ message: 'Usuario Creado Correctamente' });
        } catch (err) {
            console.error(err);
        }
    }

    public async login(req: Request, res: Response) {
        try {
            // const { email, password } = req.body;
    
            // const user = getUserForLogin(email, password);
    
            // if (!user) {
            //     return res.status(401).send({
            //         status: 401,
            //         message: 'Credenciales incorrectas'
            //     })
            // }
    
            // const token = await createJWT({ id: user.id });
    
            // return res.status(200).json({
            //     message: 'Sesión iniciada correctamente.',
            //     token
            // });
    
        } catch (err) {
            console.error(err);
        }
    }

}


export default new AuthController()