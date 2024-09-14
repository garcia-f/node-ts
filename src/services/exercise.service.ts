import { ExerciseModel } from "../models/exercise.model";
import { Exercise } from "../interfaces/exercise.interface";
import { Theme } from "../interfaces/theme.interface";



class ExerciseService {

    constructor() {}

    public async getAllExercises() {
        const allExercises = await ExerciseModel.findAll();
        return allExercises;
    }

    public async getExerciseById( id: number ) {
        const oneExercise = await ExerciseModel.findByPk( id )
        return oneExercise;
    }

    public async createExerciseModel( data: Exercise ) {
        const newExercise = await ExerciseModel.create( data );
        return newExercise;
    }

    public async updateExerciseModel( id: number, data: Theme ) {
        const updatedExercise = await ExerciseModel.update( data, { where: {id} })
        return updatedExercise;
    }

    public async deleleExerciseModel( id: number ) {
        const deletedExercise = await ExerciseModel.destroy({ where: {id} });
        return deletedExercise;
    }

}   


export default new ExerciseService()