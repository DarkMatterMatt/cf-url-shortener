export const handleRequest: NestedHandler = async (req, path) => {
    return new Response(`redirect, path: ${path}`);
};
