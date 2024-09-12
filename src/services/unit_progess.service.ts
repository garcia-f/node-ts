import { UnitProgressTable } from "../models/unit_progress.table";
import { Table } from "../interfaces/table.interface";



class UnitProgressService {

    constructor() {}

    public async createUnitProgress( data: Table) {
        const newUnitProgress = await UnitProgressTable.create( data );
        return newUnitProgress;
    }

    public async updateUnitProgress( idUser: number, idUnit: number, data: Table ) {
        const updatedUnitProgress = await UnitProgressTable.update(data, { where: {progressId: idUser, unitId: idUnit} });
        return updatedUnitProgress;
    }

    public async deleteUnitProgress( id: number ) {
        const deletedUnitProgress = await UnitProgressTable.destroy({ where: {progressId: id} });
        return deletedUnitProgress;
    }

}


export default new UnitProgressService()