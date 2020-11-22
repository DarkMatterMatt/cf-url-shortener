import { getRedirect, listRedirects } from "~/db";
import { createResponse } from "~/pages/api/responses";
import { asyncMap } from "~/helpers/array";

export const handleRequest: NestedHandler = async (req, path) => {
    const result = await listRedirects();

    return createResponse({
        status: "success",
        result: await asyncMap(result.keys, async (item) => ({
            shortName: item.name,
            createdAt: item.metadata ? item.metadata.createdAt : 0,
            createdBy: item.metadata ? item.metadata.createdBy : "",
            url: await getRedirect(item.name),
        })),
    });
};
