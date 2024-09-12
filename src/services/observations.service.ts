import { ObservationModel } from "../models/observation.model";
import { Observation } from "../interfaces/observation.interface";


class ObservationService {
    constructor() {}

    public async createObservation( data: Observation ) {
        const newObservation = await ObservationModel.create( data );
        return newObservation;
    }

    public async updateObservation( id: number, data: Observation ) {
        const updatedObservation = await ObservationModel.update( data, { where: {id} });
        return updatedObservation; 
    }

    public async deleteObservation( id: number ) {
        const deletedObservation = await ObservationModel.destroy({ where: {id} });
        return deletedObservation;
    }

}


export default new ObservationService()