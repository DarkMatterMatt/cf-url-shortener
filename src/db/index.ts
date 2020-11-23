import { asyncMap } from "~/helpers";

export * from "./validators";

declare const REDIRECTS: KVNamespace;

interface ListRedirectsResult {
    keys: Redirect[];
    list_complete: boolean;
    cursor: string;
}

export async function getRedirect(shortName: string): Promise<string | null> {
    return REDIRECTS.get(shortName);
}

export async function setRedirect(
    shortName: string,
    url: URL,
    createdBy: string
): Promise<Redirect> {
    const metadata: RedirectMetadata = {
        version: 1,
        createdAt: Date.now(),
        createdBy,
    };

    await REDIRECTS.put(shortName, url.href, { metadata });

    return { shortName, url: url.href, ...metadata };
}

export async function deleteRedirect(shortName: string): Promise<void> {
    return REDIRECTS.delete(shortName);
}

export async function listRedirects(
    cursor?: string
): Promise<ListRedirectsResult> {
    const { keys, list_complete, cursor: newCursor } = await REDIRECTS.list({
        cursor,
    });
    return {
        keys: await asyncMap(keys, async (item) => ({
            shortName: item.name,
            ...(item.metadata as RedirectMetadata),
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            url: (await getRedirect(item.name))!,
        })),
        list_complete,
        cursor: newCursor,
    };
}
