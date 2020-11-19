import { stringTemplate } from "../../helpers";
import indexHtml from "./index.html";

export const handleRequest: NestedHandler = async (req, path) => {
    const html = stringTemplate(indexHtml, {
        GOOGLE_CLIENT_ID,
    });

    return new Response(html, {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
    });
};
