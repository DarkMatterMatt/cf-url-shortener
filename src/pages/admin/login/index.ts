export const handleRequest: NestedHandler = async (req, path) => {
    return new Response(`login, path: ${path}`);
};
