import { createResponse } from "./default";

export const status403: Handler = async (req) => {
    return createResponse({
        status: "error",
        message: `Access denied for page: ${req.url}`,
        httpCode: 403,
    });
};
