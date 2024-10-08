export class ApiError extends Error {
  message;
  statusCode;
  constructor(message: string, statusCode: number) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}
