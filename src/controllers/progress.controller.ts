import { Response, Request } from "express";
import progressService from "../services/progress.service";



class ProgressController {
    constructor() {}

    public async getUserProgress(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const progress = await progressService.findAllUserProgress( parseInt( id ) );
            if(!progress) {
                res.status(404).send({
                    status: 404,
                    message: "No se ha encontrado el progreso"
                });
            }
            res.status(200).send(progress);
        } catch (err) {
            console.log(err);
        }
    }

}


export default new ProgressController()