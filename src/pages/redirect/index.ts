import { getRedirect } from "~/db";

export const handleRequest: NestedHandler = async (req, path) => {
    const shortName = path.slice("/".length);
    const result = await getRedirect(shortName);
    if (result == null) {
        return new Response(`Redirect not found: ${shortName}`);
    }
    return Response.redirect(result);
};
