import { ApiError } from ".";

export class UnAuthorisedError extends ApiError {
  constructor(message = "unauthorised", statusCode = 403) {
    super(message, statusCode);
  }
}
