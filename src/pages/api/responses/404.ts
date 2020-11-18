import { createResponse } from "./default";

export const status404: Handler = async (req) => {
    return createResponse({
        status: "error",
        message: `Page not found: ${req.url}`,
        httpCode: 404,
    });
};
