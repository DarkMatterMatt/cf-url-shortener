import { handleRequest as apiPage } from "./api";
import { handleRequest as adminPage } from "./admin";
import { handleRequest as redirectPage } from "./redirect";
import { createResponse } from "./api/responses";
import defaultHtml from "./default.html";
import { getRedirect } from "~/db";

const rootPage: NestedHandler = async (_req, _path) => {
    const result = await getRedirect("/");
    if (result != null) {
        return Response.redirect(result);
    }

    return new Response(defaultHtml, {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
    });
};

export const handleRequest: NestedHandler = async (req, path) => {
    // handle /
    if (path === "/") {
        return rootPage(req, path);
    }
    // handle /api
    if (path === "/api" || path.startsWith("/api/")) {
        return apiPage(req, path.slice("/api".length));
    }
    // handle /admin
    if (path === "/admin" || path.startsWith("/admin/")) {
        return adminPage(req, path.slice("/admin".length));
    }
    // handle /*
    return redirectPage(req, path);
};

addEventListener("fetch", async (event) => {
    const url = new URL(event.request.url);
    event.respondWith(
        handleRequest(event.request, url.pathname).catch((e) =>
            createResponse({
                status: "error",
                message: `Internal Server Error`,
                errorDetails: `${e}`,
                httpCode: 500,
            })
        )
    );
});
