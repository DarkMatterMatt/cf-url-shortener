import { createResponse, status403, status404 } from "./responses";
import { handleRequest as createPage } from "./create";
import { handleRequest as deletePage } from "./delete";
import { isValidJwt } from "../../helpers";

export const handleRequest: NestedHandler = async (req, path) => {
    if (!(await isValidJwt(req))) {
        return status403(req);
    }

    if (path === "" || path === "/") {
        return createResponse({
            status: "success",
            result: "Welcome to the API",
        });
    }
    if (path === "/create" || path.startsWith("/create/")) {
        return createPage(req, path.slice("/create".length));
    }
    if (path === "/delete" || path.startsWith("/delete/")) {
        return deletePage(req, path.slice("/delete".length));
    }
    return status404(req);
};
