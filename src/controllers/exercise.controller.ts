import { Response, Request } from "express";
import ExerciseService from "../services/exercise.service";
import { Exercise } from "../interfaces/exercise.interface";



class ObservationController {
    constructor() {}

    public async getAllExercises(_req: Request, res: Response) {
        try {
            const exercise = await ExerciseService.getAllExercises();
            if(!exercise) {
                res.status(404).send({
                    status:404,
                    message: "No se ha encontrado el ejercicio."
                });
            }
            res.status(200).send(exercise);
        } catch (err) {
            console.log(err);
        }
    }

    public async getOneExercise(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const exercise = await ExerciseService.getExerciseById( parseInt( id ) );
            if(!exercise) {
                res.status(404).send({
                    status: 404,
                    message: "No se encontrado el ejercicio." 
                });
            }
            res.status(200).send(exercise);
        } catch (err) {
            console.log(err);
        }
    }

    public async createExercise(req: Request, res: Response) {
        const data: Exercise = req.body; 
        const newExercise = await ExerciseService.createExerciseModel( data );
        if(!newExercise) {
            res.status(500).send({
                status: 500,
                message: "No se ha podido crear el ejercicio."
            });
        }
        res.status(201).send({ msg: "Ejercicio creado correctament", newExercise });
    }

    public async updateExercise(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const data: Exercise = req.body;
            const updatedExercise = await ExerciseService.updateExerciseModel( parseInt( id ), data );
            if(!updatedExercise) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido actualizar el ejercicio."
                });
            }
            res.status(200).send({ msg: "Ejercicio actualizado correctamente", updatedExercise });
        } catch (err) {
            console.log(err);
        }
    }

    public async deleteExercise(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const deletedExercise = await ExerciseService.deleleExerciseModel( parseInt( id ) );
            if(!deletedExercise) {
                res.status(500).send({
                    status: 500,
                    message: "No se ha podido eliminar el ejercicio."
                });
            }
            res.status(200).send({ msg: "Ejercicio eliminado correctamente", deletedExercise });
        } catch (err) {
            console.log(err);
        }
    }

}


export default new ObservationController()