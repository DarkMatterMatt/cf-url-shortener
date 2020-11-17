export const handleRequest: NestedHandler = async (req, path) => {
    return new Response(`logout, path: ${path}`);
};
