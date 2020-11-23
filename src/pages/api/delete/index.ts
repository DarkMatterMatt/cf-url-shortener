import { deleteRedirect, parseShortName } from "~/db";
import { createResponse } from "../responses";

export const handleRequest: NestedHandler = async (req, path) => {
    let shortName: string;

    try {
        const json = await req.json();
        const shortNameOrErr = parseShortName(json.shortName);
        if (shortNameOrErr instanceof Error) {
            throw shortNameOrErr;
        }
        shortName = shortNameOrErr;
    }
    catch (e: unknown) {
        return createResponse({
            status: "error",
            httpCode: 400,
            message: e instanceof Error ? e.message : "",
        });
    }

    await deleteRedirect(shortName);

    return createResponse({
        status: "success",
        result: {
            shortName,
        },
    });
};
