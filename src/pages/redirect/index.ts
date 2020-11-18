export const handleRequest: NestedHandler = async (req, path) => {
    const shortName = path.slice('/'.length);
    return new Response(`redirect, shortName: ${shortName}`);
};
