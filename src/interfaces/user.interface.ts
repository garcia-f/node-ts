

// TODO: ver si funciona el level
export enum Level {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH"
}
export interface User {
    id?: number,
    username: string,
    email: string,
    password: string,
    level: Level
}