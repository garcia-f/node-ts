import { Response, Request } from "express";
import ExerciseProgressService from "../services/exercise_progress.service";
import { Table } from "../interfaces/table.interface";



class ExerciseProgressController {
    constructor() {}

    public async createExerciseProgress(req: Request, res: Response) {
        const data: Table = req.body;
        const newExerciseProgress = await ExerciseProgressService.createExerciseProgress( data );
        if(!newExerciseProgress) {
            res.status(500).send({
                status: 500,
                message: "No se ha podido crear el progreso."
            });
        }
        res.status(201).send({ msg: "Progreso creado correctemante.", newExerciseProgress });
    }

    public async updateExerciseProgress(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: Table = req.body;
            const updatedExerciseProgress = await ExerciseProgressService.updateExerciseProgress( parseInt( id ), data );
            if(!updatedExerciseProgress) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido actualiar el progreso."
                });
            }
            res.status(200).send({ msg: "Progreso actualizado correctamente", updatedExerciseProgress });
        } catch (err) {
            console.log(err);
        }
    }
    
    public async deleteExerciseProgress(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedExerciseProgress = await ExerciseProgressService.deleteExerciseProgress( parseInt( id ) );
            if(!deletedExerciseProgress) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido eliminar el progreso."
                });
            }
            res.status(200).send({ msg: "Progreso eliminado correctamente", deletedExerciseProgress });
        } catch (err) {
            console.log(err);
        }
    }

}


export default new ExerciseProgressController()