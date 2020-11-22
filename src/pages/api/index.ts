import { createResponse, status403, status404 } from "./responses";
import { handleRequest as createPage } from "./create";
import { handleRequest as deletePage } from "./delete";
import { handleRequest as listPage } from "./list";
import { getAuth } from "~/helpers";

export const handleRequest: NestedHandler = async (req, path) => {
    const auth = await getAuth(req);
    if (auth instanceof Error) {
        return status403(req);
    }

    const authReq = req as AuthRequest;
    authReq.auth = auth;

    if (path === "" || path === "/") {
        return createResponse({
            status: "success",
            result: "Welcome to the API",
        });
    }
    if (path === "/create" || path.startsWith("/create/")) {
        return createPage(authReq, path.slice("/create".length));
    }
    if (path === "/delete" || path.startsWith("/delete/")) {
        return deletePage(req, path.slice("/delete".length));
    }
    if (path === "/list" || path.startsWith("/list/")) {
        return listPage(req, path.slice("/list".length));
    }
    return status404(req);
};
