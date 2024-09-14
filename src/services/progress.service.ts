import { ProgressModel } from "../models/progress.model";
import { UserModel } from "../models/user.model";
import { UnitModel } from "../models/unit.model";
import { UnitProgressTable } from "../models/unit_progress.table";
import { ThemeModel } from "../models/theme.model";
import { ThemeProgressTable } from "../models/theme_progress.table";
import { Includeable } from "sequelize";
import { User } from "../interfaces/user.interface";



class ProgressService {
    constructor() {}

    public async findAllUserProgress( idUser: number ) {
        const allUserProgress = await ProgressModel.findAll({
            where: { id: idUser },
            include: [
                {
                    model: UnitModel,
                    attributes: ["id"],
                    through: {
                        model: UnitProgressTable,
                        attributes: ["complete"]
                    }
                },
                {
                    model: ThemeModel,
                    attributes: ["id", "unitId"],
                    through: {
                        model: ThemeProgressTable,
                        attributes: ["complete"]
                    }
                }
            ] as Includeable[] | any[]
        });
        return allUserProgress;
    }


    public async createProgress( newUser: User ) {
        const user = await UserModel.findByPk(newUser.id);
        if (!user) {
            return null
        }
        const newProgress = await ProgressModel.create({ id: newUser.id });
        if (!newProgress) {
            return null
        }
        await user.update({ progressId: newProgress.id });
        return newProgress;
    }

}



export default new ProgressService()