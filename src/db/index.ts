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

export async function setRedirect(shortName: string, url: URL, createdBy: string): Promise<Redirect> {
    const metadata: RedirectMetadata = {
        version: 1,
        createdAt: Date.now(),
        createdBy,
    };

    await REDIRECTS.put(shortName, url.href, { metadata });

    return { shortName, ...metadata };
}

export async function deleteRedirect(shortName: string): Promise<void> {
    return REDIRECTS.delete(shortName);
}

export async function listRedirects(
    cursor?: string
): Promise<ListRedirectsResult> {
    const { keys, list_complete, cursor: newCursor } = await REDIRECTS.list({ cursor });
    return {
        keys: keys.map(item => ({
            shortName: item.name,
            ...(item.metadata as RedirectMetadata),
        })),
        list_complete,
        cursor: newCursor,
    };
}
