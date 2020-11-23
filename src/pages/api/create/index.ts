import { parseShortName, setRedirect } from "~/db";
import { createResponse } from "../responses";

interface CreateParams {
    shortName: string;
    url: URL;
}

export const handleRequest: AuthNestedHandler = async (req, path) => {
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
    catch (e: unknown) {
        return createResponse({
            status: "error",
            httpCode: 400,
            message: e instanceof Error ? e.message : "",
        });
    }

    const result = await setRedirect(
        params.shortName,
        params.url,
        `${req.auth.name} <${req.auth.email}>`
    );

    return createResponse({
        status: "success",
        result,
    });
};
