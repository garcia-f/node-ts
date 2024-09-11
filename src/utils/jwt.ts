import jwt from 'jsonwebtoken';
import { envs } from '../environments/environments';

interface Payload {
    [key: string]: any;
}

export const createJWT = (payload: Payload): Promise<{ token: string }> => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, envs.DB_SECRET as string, (err, token) => {
            if (err) {
                reject('Error al firmar el token');
            }

            if (token) {
                resolve({ token });
            }
        });
    });
};
