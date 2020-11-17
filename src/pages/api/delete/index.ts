export const handleRequest: NestedHandler = async (req, path) => {
    return new Response(`delete, path: ${path}`);
};
