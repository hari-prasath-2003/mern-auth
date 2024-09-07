import { ApiError } from "../error";

export class UnAuthenticatedError extends ApiError {
  constructor(message = "unauthenticated", statusCode = 401) {
    super(message, statusCode);
  }
}
