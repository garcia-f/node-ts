import { ThemeModel } from "../models/theme.model";
import { ExerciseModel } from "../models/exercise.model";
import { Theme } from "../interfaces/theme.interface";



class ThemeService {

    constructor() {}

    public async findAllThemes() {
        const allThemes = await ThemeModel.findAll({
            include: {
                model: ExerciseModel,
                attributes: ["name", "description", "code", "id"]
            }
        })
        return allThemes;
    }

    public async getThemeById( id: number ) {
        const oneTheme = await ThemeModel.findByPk(id, {
            include: {
                model: ExerciseModel,
                attributes: ["name", "description", "code", "id"],
            }
        });
        return oneTheme;
    }

    public async createThemeModel( data: Theme ) {
        const newTheme = await ThemeModel.create( data );
        return newTheme;
    }

    public async updateThemeModel( id: number, data: Theme) {
        const updatedTheme = await ThemeModel.update(data, { where: { id } });
        return updatedTheme;
    }

    public async deleteThemeModel( id: number ) {
        const deletedTheme = await ThemeModel.destroy({ where: { id } });
        return deletedTheme;
    }

}


export default new ThemeService()