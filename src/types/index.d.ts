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
};

type ApiSuccess = {
    status: "success";
    result: string | number | Record<string, any>;
};

interface RedirectMetadata {
    version: number;
    createdAt: number;
}
