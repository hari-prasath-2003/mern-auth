import { ITokenManager } from "../interface/ITokenManager";
import jwt, { JwtPayload } from "jsonwebtoken";

export default class TokenManager implements ITokenManager {
  private tokenLibrary = jwt;
  private secretKey = "my-secret-key";

  generateAccessToken(payload: object): String {
    return this.tokenLibrary.sign(payload, this.secretKey, { expiresIn: "1h" });
  }

  generateRefreshToken(payload: object): String {
    return this.tokenLibrary.sign(payload, this.secretKey, { expiresIn: "1d" });
  }

  verifyToken(token: string): JwtPayload {
    return this.tokenLibrary.verify(token, this.secretKey) as JwtPayload;
  }
}
