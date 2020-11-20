import { handleRequest as rootPage } from "./pages";

addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);
    event.respondWith(rootPage(event.request, url.pathname));
});
