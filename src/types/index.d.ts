declare module "*.html";

// environmental variables
declare const GOOGLE_CLIENT_ID: string;
declare const ENVIRONMENT: "dev" | "production";

type Handler = (request: Request) => Promise<Response>;

type NestedHandler = (
    request: Request,
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

interface RedirectMetadata {
    version: number;
    createdAt: number;
}

interface Auth {
    email: string;
    name: string;
    family_name: string;
    given_name: string;
    locale: string;
    picture: string;
}
