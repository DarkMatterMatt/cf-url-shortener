declare module "*.html";

// environmental variables
declare const GOOGLE_CLIENT_ID: string;
declare const ENVIRONMENT: "dev" | "production";
declare const AUTHORIZED_EMAIL_REGEX: string;

type Handler = (request: Request) => Promise<Response>;

type NestedHandler = (
    request: Request,
    remainingPath: string,
) => Promise<Response>;

type AuthNestedHandler = (
    request: AuthRequest,
    remainingPath: string,
) => Promise<Response>;

type ApiError = {
    status: "error";
    message: string;
    httpCode: number;
    [x: string]: any;
};

type ApiSuccess = {
    status: "success";
    result: string | number | Record<string, any>;
    [x: string]: any;
};

interface Redirect extends RedirectMetadata {
    shortName: string;
    url: string;
}

interface RedirectMetadata {
    version: number;
    createdAt: number;
    createdBy: string;
}

interface Auth {
    email: string;
    name: string;
    family_name: string;
    given_name: string;
    locale: string;
    picture: string;
}

interface AuthRequest extends Request {
    auth: Auth;
}
