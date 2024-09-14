import { UnitModel } from "../models/unit.model";
import { ThemeModel } from "../models/theme.model";
import { Unit } from "../interfaces/unit.interface";



class UnitService {

    constructor() {}

    public async findAllUnits() {
        const allUnits = await UnitModel.findAll({
            include: {
                model: ThemeModel,
                attributes: ["id", "name", "descriptiton"],
            }
        });
        return allUnits;
    }

    public async getUnitById( id: number ) {
        const oneUnit = await UnitModel.findByPk( id );
        return oneUnit;
    }

    
    public async createUnitModel( data: Unit ) {
        const newUnit = await UnitModel.create( data );
        return newUnit;
    }

    public async updateUnitModel( id: number, data: Unit ) {
        const updatedUnit = await UnitModel.update(data, { where: { id } });
        return updatedUnit;
    }


    public async deleteUnitModel( id: number ) {
        const deleteUnit = await UnitModel.destroy({ where: { id } });
        return deleteUnit;
    }


}


export default new UnitService()