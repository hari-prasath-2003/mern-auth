import { ITokenManager } from "../interface/ITokenManager";
import jwt,{JwtPayload} from "jsonwebtoken"

export default class TokenManager implements ITokenManager{
    private tokenLibrary = jwt;
    private secretKey = "my-secret-key";

    generateToken(payload: object): String {
        return this.tokenLibrary.sign(payload,this.secretKey);
    }

    verifyToken(token: string): JwtPayload | null {
        return this.tokenLibrary.verify(token,this.secretKey) as JwtPayload;
    }

}