import { listRedirects } from "~/db";
import { createResponse } from "~/pages/api/responses";

export const handleRequest: NestedHandler = async (req, path) => {
    const result = await listRedirects();

    return createResponse({
        status: "success",
        result: result.keys,
    });
};
