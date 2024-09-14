import { Response, Request } from "express";
import ThemeService from "../services/theme.service";
import { Theme } from "../interfaces/theme.interface";



class ThemeController {
    constructor() {}

    public async getAllThemes(_req: Request, res: Response) {
        try {
            const themes = await ThemeService.findAllThemes();
            if(!themes) {
                res.status(404).send({
                    status: 404,
                    message: "No se han encontrado temas."
                });
            }
            res.status(200).send(themes);
        } catch (err) {
            console.log(err);
        }
    }

    public async getOneTheme(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const oneTheme = await ThemeService.getThemeById( parseInt(id) );
            if(!oneTheme) {
                res.status(404).send({
                    status: 404,
                    message: "No se ha encontrado el tema."
                });
            }
            res.status(200).send(oneTheme);
        } catch (err) {
            console.log(err);
        }
    }

    public async createTheme(req: Request, res: Response) {
        try {
            const data: Theme = req.body;
            const newTheme = await ThemeService.createThemeModel( data );
            if(!newTheme) {
                res.status(500).send({
                    status:500,
                    message: "No se ha podido crear el tema."
                });
            }
            res.status(201).send({ msg: "Tema creado correctamente", newTheme });
        } catch (err) {
            console.log(err);
        }
    }

    public async updateTheme(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: Theme = req.body;
            const updatedTheme = await ThemeService.updateThemeModel( parseInt(id), data);
            if(!updatedTheme) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido actualizar el tema."
                });
            }
            res.status(200).send({ msg: "Tema actualizado correctamente.", updatedTheme});
        } catch (err) {
            console.log(err);
        }
    }

    public async deleteTheme(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedTheme = await ThemeService.deleteThemeModel( parseInt( id ) );
        } catch (err) {
            console.log(err);
        }
    }

}


export default new ThemeController()