export const handleRequest: NestedHandler = async (req, path) => {
    return new Response(`api, path: ${path}`);
};
