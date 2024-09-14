import { Response, Request } from "express";
import UnitProgressService from "../services/unit_progess.service";
import { Table } from "../interfaces/table.interface";



class UnitProgressController {
    constructor() {}

    public async createUnitProgress(req: Request, res: Response) {
        try {
            const data: Table = req.body;
            const newUnitProgress = await UnitProgressService.createUnitProgress( data );
            if(!newUnitProgress) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido crear el progreso."
                });
            }
            res.status(201).send({ msg: "Progreso creado correctamente", newUnitProgress });
        } catch (err) {
            console.log(err);
        }
    }

    public async updateUnitProgress(req: Request, res: Response) {
        try {
            const { idUser, idUnit } = req.params;
            const data: Table = req.body;
            const updatedUnitProgress = await UnitProgressService.updateUnitProgress( parseInt( idUnit), parseInt( idUser ), data );
            if(!updatedUnitProgress) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido actualizar el progreso."
                });
            } 
            res.status(200).send({ msg: "Progreso actualizado correctamente.", updatedUnitProgress });
        } catch (err) {
            console.log(err);
        }
    }

    public async deleteUnitProgress(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedUnitProgress = await UnitProgressService.deleteUnitProgress( parseInt( id ) );
            if(!deletedUnitProgress) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido eliminar el progreso."
                });
            }
            res.status(200).send({ msg: "Progreso eliminado correctamente", deletedUnitProgress });
        } catch (err) {
            console.log(err);
        }
    }

}


export default new UnitProgressController()