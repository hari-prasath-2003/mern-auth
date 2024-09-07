import { ApiError } from ".";

export class InternalServerError extends ApiError {
  constructor(message = "internal server error", statusCode = 500) {
    super(message, statusCode);
  }
}
