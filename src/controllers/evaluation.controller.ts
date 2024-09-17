import { Response, Request } from "express";


class EvaluationController {
    constructor() {}

    public async evaluation(req: Request, res: Response) {
        const { answers }: { answers: boolean[] } = req.body

        let total = 0

            answers.forEach(answer => {
            if (answer) {
                total += 20
            }
        })

        res.status(200).send({ approved: total >= 60, points: total })
    }

    public async unitEvaluation(req: Request, res: Response) {
        const { answers }: { answers: boolean[] } = req.body

        let total = 0
    
        answers.forEach(answer => {
            if (answer) {
                total += 10
            }
        })
    
        res.status(200).send({ approved: total >= 60, points: total })
    }

}


export default new EvaluationController()