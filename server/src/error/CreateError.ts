import { ApiError } from "../error";

export class CreateError extends ApiError {
  constructor(message = "conflict in resource", statusCode = 409) {
    super(message, statusCode);
  }
}
