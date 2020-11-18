import { handleRequest as apiPage } from './api';
import { handleRequest as redirectPage } from './redirect';

const rootPage: NestedHandler = async (req, path) => {
    return new Response(`Welcome, path: ${path}`);
};

export const handleRequest: NestedHandler = async (req, path) => {
    // handle /
    if (path === '/') {
        return rootPage(req, path);
    }
    // handle /api
    if (path === '/api' || path.startsWith("/api/")) {
        return apiPage(req, path.slice('/api'.length));
    }
    // handle /*
    return redirectPage(req, path);
};

addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    event.respondWith(handleRequest(event.request, url.pathname));
});
