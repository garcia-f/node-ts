import { Response, Request } from "express";
import ThemeProgressService from "../services/theme_progress.service";
import { Table } from "../interfaces/table.interface";



class ThemeProgressController {
    constructor() {}

    public async getAllUserThemeProgress(req: Request, res: Response) {
        try {
            const { idUser } = req.params;
            const userThemeProgress = await ThemeProgressService.getUserThemeProgress( parseInt( idUser ) );
            if(!userThemeProgress) {
                res.status(404).send({
                    status: 404,
                    message: "No se ha encontrado el progreso."
                });
            }
            res.status(200).send(userThemeProgress);
        } catch (err) {
            console.log(err);
        }
    }

    public async createThemeProgress(req: Request, res: Response) {
        try {
            const data: Table = req.body;
            const newThemeProgress = await ThemeProgressService.createThemeProgress( data );
            if(!newThemeProgress) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido crear el progreso."
                });
            }
            res.status(201).send({ msg: "Progreso creado correctamente", newThemeProgress });
        } catch (err) {
            console.log(err);
        }
    }

    public async updateThemeProgress(req: Request, res: Response) {
        try {
            const { idProgress, idTheme } = req.params;
            const data: Table = req.body;
            const updatedThemeProgress = await ThemeProgressService.updateThemeProgress( parseInt( idProgress ), parseInt( idTheme ), data );
            if(!updatedThemeProgress) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido actualiza el progreso."
                });
            }
            res.status(200).send({ msg: "Progreso actualizado correctamente", updatedThemeProgress });
        } catch (err) {
            console.log(err);
        }
    }

    public async deleteThemeProgress(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedThemeProgress = await ThemeProgressService.deleteThemeProgress( parseInt( id ) );
            if(!deletedThemeProgress) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido eliminar el progreso."
                });
            }
            res.status(200).send({ msg: "Progreso eliminado correctamente", deletedThemeProgress });
        } catch (err) {
            console.log(err);
        }
    }

}


export default new ThemeProgressController()