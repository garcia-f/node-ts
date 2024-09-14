import express, { Application} from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import { envs } from "./environments/environments";
import { connectionDB } from "./config/connectionDB";

import userRouter from "./routes/user.routes";
import unitRouter from "./routes/unit.routes";
import themeRouter from "./routes/theme.routes";
import progressRouter from "./routes/progress.routes";
import exerciseRouter from "./routes/exercise.routes";
import observationRouter from "./routes/observation.routes";
import unitProgresRouter from "./routes/unit_progress.routes";
import themeProgressRouter from "./routes/theme_progress.routes";
import exerciseProgressRouter from "./routes/exercise_progress.routes";


class Server {

    private app: Application;
    private port : number;

    constructor() {
        this.app = express();
        this.port = envs.PORT;
        
        this.dbConnect();
        this.middlewares();
        this.routes();
    }

    async dbConnect(): Promise<void>{
        await connectionDB();
    }

    middlewares(): void {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(helmet())
    }

    routes(): void {
        this.app.use('/user', userRouter)
        this.app.use('/unit', unitRouter)
        this.app.use('/theme', themeRouter)
        this.app.use('/exercise', exerciseRouter)
        this.app.use('/observation', observationRouter)
        this.app.use('/progress', progressRouter)
        this.app.use('/theme_progress', themeProgressRouter)
        this.app.use('/exercise_progress', exerciseProgressRouter)
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

}


export default Server;