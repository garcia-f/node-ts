import { Table } from "../interfaces/table.interface";
import { ThemeProgressTable } from "../models/theme_progress.table";



class ThemeProgressService {

    constructor() {}

    public async getUserThemeProgress( idUser: number ) {
        const allThemeProgress = await ThemeProgressTable.findAll({
            attributes: ["themeId", "complete"],
            where: { progressId: idUser }
        });
        return allThemeProgress;
    }

    public async createThemeProgress( data: Table ) {
        const newThemeProgress = await ThemeProgressTable.create( data );
        return newThemeProgress;
    }

    public async createAllThemeProgressForUser( newUser: Table ) {
        return new Promise(async (resolve, reject) => {
            try {
                for (let i = 1; i <= 25; i++) {
                    await ThemeProgressTable.create({ progressId: newUser.progressId, themeId: i, complete: false })
                }
                resolve("Se crearon los progresos para el usuario")
            } catch (err) {
                console.error(err);
                reject(err)
            }
        });
    }

    public async updateThemeProgress( idProgress: number, idTheme: number, data: Table) {
        const updatedThemeProgress = await ThemeProgressTable.update( data, { where: {progressId: idProgress, themeId: idTheme}  } );
        return updatedThemeProgress;
    }

    public async deleteThemeProgress( id: number ) {
        const deletedThemeProgress = await ThemeProgressTable.destroy({ where: { progressId: id } });
        return deletedThemeProgress;
    }

}


export default new ThemeProgressService()