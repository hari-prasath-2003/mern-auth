import { JwtPayload } from "jsonwebtoken";

export interface ITokenManager {
  generateRefreshToken(payload: object): String;
  generateAccessToken(payload: object): String;
  verifyToken(token: string): JwtPayload;
}
