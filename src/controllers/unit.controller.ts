import { Response, Request } from "express";
import UnitService from "../services/unit.service";
import { Unit } from "../interfaces/unit.interface";



class UnitController {
    constructor() {}

    public async getAllUnits(_req: Request, res: Response) {
        try {
            const allUnits = await UnitService.findAllUnits();
            if(!allUnits.length) {
                res.status(404).send({
                    status: 404,
                    message: "No se han encontrado unidades."
                });
            }
            res.status(200).send(allUnits);
        } catch (err) {
            console.log(err);
        }
    }

    public async getOneUnit(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const oneId = await UnitService.getUnitById( parseInt( id ) );
            if(!oneId) {
                res.status(404).send({
                    status: 404,
                    message: "No se ha encontrado la unidad"
                });
            }
            res.status(200).send(oneId);
        } catch (err) {
            console.log(err);
        }
    }

    public async createUnit(req: Request, res: Response) {
        try {
            const data: Unit = req.body;
            const newUnit = await UnitService.createUnitModel( data );
            if(!newUnit) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido crear la unidad."
                });
            }
            res.status(201).send({ msg: "Unidad creada correctamente", newUnit });
        } catch (err) {
            console.log(err);
        }
    }

    public async updateUnit(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data : Unit = req.body;
            const updatedUnit = await UnitService.updateUnitModel( parseInt( id ), data);
            if(!updatedUnit) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido actualizar la unidad."
                });
            }
            res.status(200).send({ msg: "Unidad actualizada correctamente.", updatedUnit}); 
        } catch (err) {
            console.log(err);
        }
    }

    public async deleteUnit(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedUnit = await UnitService.deleteUnitModel( parseInt( id ) );
            if(!deletedUnit) {
                res.status(404).send({
                    status: 404,
                    message: "No se ha encontrado la unidad."
                });
            }
            res.status(200).send({ msg: "Unidad eliminada correctamente", deletedUnit });
        } catch (err) {
            console.log(err);
        }
    }


}


export default new UnitController()