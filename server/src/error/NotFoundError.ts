import { ApiError } from "../error";

export class NotFoundError extends ApiError {
  constructor(message = "resource not found", statusCode = 404) {
    super(message, statusCode);
  }
}
