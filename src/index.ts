import { checkEnv } from "./helpers";
import { handleRequest as rootPage } from "./pages";

checkEnv();

addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);
    event.respondWith(rootPage(event.request, url.pathname));
});
