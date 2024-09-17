import { Request, Response } from "express";
import UserService from "../services/user.service";
import { User } from "../interfaces/user.interface";



class UserController {
    constructor() {}

    public async ctrlGetAllUsers(_req: Request, res: Response) {
        try {
            const users = await UserService.getAllUsers();
            if(!users.length) {
                res.status(404).send({
                    status: 404,
                    message: "No se han encontrado usuarios"
                });
            }
            res.status(200).send(users);
        } catch (err) {
            console.log(err)
        }
    } 

    public async ctrlGetOneUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await UserService.getUserById( parseInt(id) );
            if(!user) {
                res.status(404).send({
                    status: 404,
                    message: "No se ha encontrado el usuario"
                });
            }
            res.status(200).json(user);
        } catch (err) {
            console.log(err);
        }

    }

    public async ctrlCreateUser(req: Request, res: Response) {
        try {
            const data: User = req.body;
            const newUser = await UserService.createUser( data );
            res.status(201).send({ msg: "Usuario creado correctamente", newUser });
        } catch (err) {
            console.log(err);
        }
    }

    public async ctrlUpdateUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: User = req.body;
            const user = await UserService.updateUser( parseInt(id), data );
            res.status(200).send({ msg: "Usuario actualizado correctamente", user});
        } catch (err) {
            console.log(err);
        }
    }

    public async ctrlDeleteUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user = await UserService.deleteUser( parseInt( id ) );
            res.status(200).send({ msg: "Usuario eliminado correctamente", user });
        } catch (err) {
            console.log(err);
        }
    }

}

export default new UserController()
