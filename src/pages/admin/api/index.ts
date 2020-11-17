export async function handleRequest(request: Request): Promise<Response> {
    return new Response(`api, path: ${path}`);
}
