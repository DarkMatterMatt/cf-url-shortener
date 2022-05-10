import { getRedirect, parseShortName } from "~/db";

export const handleRequest: NestedHandler = async (_req, path) => {
    const shortName = parseShortName(path.slice("/".length));
    if (shortName instanceof Error) {
        return new Response(`Invalid redirect: ${shortName}`);
    }
    const result = await getRedirect(shortName);
    if (result == null) {
        return new Response(`Redirect not found: ${shortName}`);
    }
    return Response.redirect(result);
};
