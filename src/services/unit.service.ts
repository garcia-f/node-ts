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
        })
    }

    public async getUnitById( id: number ) {
        const oneUnit = await UnitModel.findByPk( id );
        return oneUnit;
    }

    // TODO: ver esto
    public async createUnitModel( data: Unit ) {
        const newUnit = await UnitModel.create( data );
        return newUnit;
    }

    // TODO: ver esto
    public async updateUnitModel( id: number, data: Unit ) {
        const updatedUnit = await UnitModel.update(data, { where: { id } });
        return updatedUnit;
    }


    // TODO: ver esto
    public async deleteUnitModel( id: number ) {
        const deleteUnit = await UnitModel.destroy({ where: { id } })
    }


}


export default new UnitService()