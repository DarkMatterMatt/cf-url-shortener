declare module '*.html';

type Handler = (
    request: Request,
) => Promise<Response>;

type NestedHandler = (
    request: Request,
    remainingPath: string,
) => Promise<Response>;

type ApiError = {
    status: "error";
    message: string;
    httpCode: number;
}

type ApiSuccess = {
    status: "success";
    result: string | number | Record<string, any>;
}

interface RedirectMetadata {
    version: number;
    createdAt: number;
}
