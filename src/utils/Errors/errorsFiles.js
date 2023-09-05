export class ErrorFile extends Error {
  constructor(message, code = 204, description = "No content") {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}
