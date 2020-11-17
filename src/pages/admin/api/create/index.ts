export const handleRequest: NestedHandler = async (req, path) => {
    return new Response(`create, path: ${path}`);
};
