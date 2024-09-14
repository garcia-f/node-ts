import { Response, Request } from "express";
import ObservationService from "../services/observations.service";
import { Observation } from "../interfaces/observation.interface";



class ObservationController {
    constructor() {}

    public async createObservation(req: Request, res: Response) {
        try {
            const data: Observation = req.body;
            const newObservation = await ObservationService.createObservation( data );
            if(!newObservation) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido crear la observacion."
                });
            }
            res.status(201).send({ msg: "Observacion creada correctamente", newObservation});
        } catch (err) {
            console.log(err)
        }
    }

    public async updateObsevation(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: Observation = req.body;
            const updatedObservation = await ObservationService.updateObservation( parseInt( id ), data );
            if(!updatedObservation) {
                res.status(500).send({
                    status: 500,
                    messge: "No se ha podido actualizar la observacion."
                });
            }
            res.status(200).send({ msg: "Observacion actualizada correctamente.", updatedObservation });
        } catch (err) {
            console.log(err);
        }
    }

    public async deleteObservation(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedObservation = await ObservationService.deleteObservation( parseInt( id ) );
            if(!deletedObservation) {
                res.status(500).send({
                    status: 500,
                    message: "No se podido eliminar la observacion."
                });
            }
            res.status(200).send({ msg: "Observacion eliminada correctamente.", deletedObservation });
        } catch (err) {
            console.log(err);
        }
    }

}


export default new ObservationController()