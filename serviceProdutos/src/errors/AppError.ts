class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly code: string;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
