export class ApiError extends Error {
    public readonly status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;

        // Set the prototype explicitly (good practice for custom errors)
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}
