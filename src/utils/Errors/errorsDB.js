class ErrorsDB extends Error {
  constructor(message, code = 400, description = "Not found") {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = { ErrorsDB };
