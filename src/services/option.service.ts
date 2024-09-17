import { OptionModel } from "../models/option.model";



class OptionService {
    constructor() {}

    public async getAllOptions() {
        const options = await OptionModel.findAll();
        return options;
    }

    public async getOneOption( id: number ) {
        const option = await OptionModel.findByPk(id);
        return option;
    }

}


export default new OptionService()