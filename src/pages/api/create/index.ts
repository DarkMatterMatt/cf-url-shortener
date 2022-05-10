import { getRedirect, parseShortName, setRedirect } from "~/db";
import { createResponse } from "../responses";

const RESERVED_PATHS = ["admin", "api"];

interface CreateParams {
    shortName: string;
    url: URL;
}

export const handleRequest: AuthNestedHandler = async (req, _path) => {
    let params: CreateParams;

    try {
        const json = await req.json();
        const url = new URL(json.url);
        const shortName = parseShortName(json.shortName);
        if (shortName instanceof Error) {
            throw shortName;
        }
        if (RESERVED_PATHS.includes(shortName)) {
            throw new Error("Provided shortName is reserved");
        }
        if ((await getRedirect(shortName)) != null) {
            throw new Error("Provided shortName is already in use");
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
