import { EvaluationModel } from "../models/evaluation.model";
import { Evaluation } from "../interfaces/evaluation.interface";


class EvaluationService {
    constructor() {}

    public async  getAllEvaluations() {
        const evaluations = await EvaluationModel.findAll();
        return evaluations;
    }

    public async  getOneEvaluation( id: number ) {
        const evaluation = await EvaluationModel.findByPk(id);
        return evaluation;
    }

    public async  createEvaluation( data: Evaluation ) {
        const evaluation = await EvaluationModel.create(data);
        return evaluation;
    }

    public async  updateEvaluation( id: string, data: Evaluation) {
        const updatedEvaluation = await EvaluationModel.update(data, { where: { id } });
        return updatedEvaluation;
    }

}