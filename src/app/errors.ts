export enum errorTypes {
    INVALID_EMAIL = "INVALID_EMAIL_FORMAT",
    EMAIL_ALREADY_EXISTS = "EMAIL_ALREADY_EXISTS",
    SIGNUP_FAILED = "SIGNUP_FAILED"
}

export const errorMessages: any = {
    [errorTypes.INVALID_EMAIL]: "Please enter a valid email address.",
    [errorTypes.EMAIL_ALREADY_EXISTS]: "This email is already registered.",
    [errorTypes.SIGNUP_FAILED]: "Sign up failed. Please try again later."
};