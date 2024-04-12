import { JwtPayload } from "jsonwebtoken";

export interface ITokenManager {
  generateToken(payload: object): String;
  verifyToken(token: string): JwtPayload | null;
}
