import { parseShortName, setRedirect } from "~/db";
import { createResponse } from "../responses";

interface CreateParams {
    shortName: string;
    url: URL;
}

export const handleRequest: NestedHandler = async (req, path) => {
    let params: CreateParams;

    try {
        const json = await req.json();
        const url = new URL(json.url);
        const shortName = parseShortName(json.shortName);
        if (shortName instanceof Error) {
            throw shortName;
        }
        params = {
            shortName,
            url,
        };
    }
    catch (e: Error) {
        return createResponse({
            status: "error",
            httpCode: 400,
            message: e.message,
        });
    }

    await setRedirect(params.shortName, params.url);

    return createResponse({
        status: "success",
        result: { created: params },
    });
};
