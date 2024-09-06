import express, { Application} from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";



import { envs } from "./environments/environments";
import { connectionDB } from "./config/connectionDB";


class Server {

    private app: Application;
    private port : number;

    constructor(){
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

    routes(): void {}

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

}


export default Server;