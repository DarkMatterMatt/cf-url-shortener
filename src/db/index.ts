export * from "./validators";

declare const REDIRECTS: KVNamespace;

interface ListRedirectsResult {
    keys: {
        name: string;
        metadata: RedirectMetadata;
    }[];
    list_complete: boolean;
    cursor: string;
}

export async function getRedirect(shortName: string): Promise<string | null> {
    return REDIRECTS.get(shortName);
}

export async function setRedirect(shortName: string, url: URL): Promise<void> {
    return REDIRECTS.put(shortName, url.href, {
        metadata: {
            version: 1,
            createdAt: Date.now(),
        } as RedirectMetadata,
    });
}

export async function deleteRedirect(shortName: string): Promise<void> {
    return REDIRECTS.delete(shortName);
}

export async function listRedirects(
    cursor?: string
): Promise<ListRedirectsResult> {
    return (REDIRECTS.list({
        cursor,
    }) as unknown) as ListRedirectsResult;
}
