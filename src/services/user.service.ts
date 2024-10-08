import bcrypt from 'bcryptjs';
import { hashString } from '../utils/hash';
import { User } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";
import { UnitModel } from "../models/unit.model";
import { ProgressModel } from "../models/progress.model";
import { UnitProgressTable } from "../models/unit_progress.table";
import { Includeable } from 'sequelize';



class UserService {

    constructor(){}

    public async getAllUsers() {
        const users = await UserModel.findAll();
        return users;
    }

    public async getUserById (id: number) {
        const user = await UserModel.findByPk(id, {
            attributes: { exclude: ['password', 'level', 'createdAt', 'updatedAt', 'progressId'] },
            include: [
            {
                model: ProgressModel,
                attributes: ['id'],
                include: [
                    {
                        model: UnitModel,
                        attributes: ['id'],
                        through: {
                            attributes: ['complete'],
                            model: UnitProgressTable,
                        },
                    },
                ],
            },
            ] as Includeable[] | any[]
        });
        return user;
    }

    public async getUserByUserNameOrMail(username: string, mail: string) {
        const userForName = await UserModel.findOne({ where: { username: username } });
        const userForMail = await UserModel.findOne({ where: { email: mail } });
        return { userForName, userForMail };
    }

    public async getUserForLogin(email: string, password: string) {
        const user = await UserModel.findOne({ where: { email: email } });
        if (!user) {
            return null;
        }
        const isInvalidPassword = await bcrypt.compare(password, user.password);
        if (!isInvalidPassword) {
            return null;
        }
        return user;
    }

    public async createUser({ password, ...data }: User) {
        const hashedPassword = await hashString(password);
        const user = await UserModel.create({...data, password: hashedPassword});
        return user;
    }

    public async updateUser(id: number, data: User) {
        const user = await UserModel.update(data, { where: { id } });
        return user;
    }

    public async deleteUser(id: number) {
        const user = await UserModel.destroy({ where: { id } });
        return user;
    }

}

export default new UserService()