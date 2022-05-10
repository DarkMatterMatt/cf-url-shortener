import { listRedirects } from "~/db";
import { createResponse } from "~/pages/api/responses";

export const handleRequest: NestedHandler = async (_req, _path) => {
    const result = await listRedirects();

    return createResponse({
        status: "success",
        result: result.keys,
    });
};
