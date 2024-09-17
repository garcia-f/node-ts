import { QuestionModel } from "../models/question.model";



class QuestionService {
    constructor() {}

    public async getAllQuestions() {
        const questions = await QuestionModel.findAll();
        return questions;
    }

    public async getOneQuestion( id: number ) {
        const question = await QuestionModel.findByPk(id);
        return question;
    }

}


export default new QuestionService()