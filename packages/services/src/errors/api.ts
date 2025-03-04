export class ApiError extends Error {
  constructor(
    public message: string,
    public status?: number,
    public code?: string,
    public originalError?: unknown,
  ) {
    super(message);

    // This line is necessary for proper inheritance in TypeScript
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
