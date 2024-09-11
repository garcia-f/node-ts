import bcrypt from "bcryptjs";



export const hashString = async (text: string): Promise<string> => {
    return await bcrypt.hash(text, 10); 
};