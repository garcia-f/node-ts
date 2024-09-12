import UnitProgressTable from "../models/Unit_Progress.table.js";

export const createUnitProgress = async (data) => {
    const newUnitProgress = await UnitProgressTable.create(data)
    return newUnitProgress
}

export const updateUnitProgress = async (idUser, idUnit, data) => {
    const updatedUnitProgress = await UnitProgressTable.update(data, { where: { progressId: idUser, unitId: idUnit } })
    return updatedUnitProgress
}

export const deleteUnitProgress = async (id) => {
    const deletedUnitProgress = await UnitProgressTable.destroy({ where: { progressId: id } })
    return deletedUnitProgress
}