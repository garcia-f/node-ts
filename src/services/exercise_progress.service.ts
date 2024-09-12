import { ExerciseProgressTable } from "../models/exercise_progress.table";
import { Table } from "../interfaces/table.interface";


class ExerciseProgressService {
    constructor() {}

    public async createExerciseProgress( data: Table ) {
        const newExerciseProgress = await ExerciseProgressTable.create( data );
        return newExerciseProgress;
    }

    public async updateExerciseProgress( id: number, data: Table ) {
        const updatedExerciseProgress = await ExerciseProgressTable.update( data, { where: { progressId: id } });
        return updatedExerciseProgress;
    }

    public async deleteExerciseProgress( id: number ) {
        const deleteExerciseProgress = await ExerciseProgressTable.destroy({ where: { progressId: id } });
        return deleteExerciseProgress;
    }

}

export default new ExerciseProgressService()