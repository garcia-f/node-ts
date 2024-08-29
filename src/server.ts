import express, { Application} from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";


import equipamentRouter from "./routes/index.ts"; 
import db, { envs } from "./config/db.ts";


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

    async dbConnect(){

        try {
            
            await db.authenticate();
            console.log("Database connected")

        } catch (error: any) {
            throw new Error( error );
        }

    }

    middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(helmet())
    }

    routes(){}

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

}


export default Server;












// let nombre: string = "Javier";

// console.log(nombre)


// let sumar: (a: number, b: number) => number = (a, b) => {
//     return a + b;
// }


// type FuncionSumar = (a: number, b: number) => number;
// let sumar2: FuncionSumar = (a, b) => {
//     return a + b;
// }

// import { Ipersona } from "./interface";


// class Persona implements Ipersona {
//     public nombre: string;
//     public apellido: string;
//     public edad: number;
//     public dni: string;
    
//     constructor(nombre: string, apellido: string, edad: number, dni: string) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.dni = dni;
//     }
// }

// const persona = new Persona("Javier", "Perez", 26, "123456789");
// console.log(persona);