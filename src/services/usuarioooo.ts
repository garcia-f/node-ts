import UserModel from "../models/User.model.js";
import ProgressModel from "../models/Progress.model.js";
import UnitProgressTable from "../models/Unit_Progress.table.js";
import UnitModel from "../models/Unit.model.js";
import { hashString } from "../utils/hash.js"
import bcrypt from "bcrypt"

export const getAllUsers = async () => {
    const users = await UserModel.findAll();
    return users;
}

export const getUserById = async (id) => {
    const user = await UserModel.findByPk(id, 
        { 
            attributes: { exclude: ['password', 'level', 'createdAt', 'updatedAt', 'progressId'] },
            include: {
                model: ProgressModel,
                attributes: ['id'],
                include: {
                    model: UnitModel,
                    attributes: ['id'],
                    through: {
                        model: UnitProgressTable,
                        attributes: ['complete']
                    }
                }
            }
        }
    );
    return user;
}

export const getUserByUserNameOrMail = async (username, mail) => {
    const userForName = await UserModel.findOne({ where: { username: username } });
    const userForMail = await UserModel.findOne({ where: { email: mail } });
    return { userForName, userForMail };
}

export const getUserForLogin = async (email, password) => {
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

export const createUser = async ({ password, ...data }) => {
    const hashedPassword = await hashString(password);
    const user = await UserModel.create({...data, password: hashedPassword});
    return user;
}

export const updateUser = async (id, data) => {
    const user = await UserModel.update(data, { where: { id } });
    return user;
}

export const deleteUser = async (id) => {
    const user = await UserModel.destroy({ where: { id } });
    return user;
}