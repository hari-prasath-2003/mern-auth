import { ApiError } from "../error";

export class ValidationError extends ApiError {
  constructor(message = "invalid request format", statusCode = 400) {
    super(message, statusCode);
  }
}
