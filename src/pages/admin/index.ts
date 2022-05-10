import { stringTemplate } from "~/helpers";
import indexHtml from "./index.html";

export const handleRequest: NestedHandler = async (_req, _path) => {
    const html = stringTemplate(indexHtml, {
        GOOGLE_CLIENT_ID,
    });

    return new Response(html, {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
    });
};
