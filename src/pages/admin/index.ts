import indexHtml from "./index.html";

export const handleRequest: NestedHandler = async (req, path) => {
    return new Response(indexHtml, {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
    });
};
