import TOML, { JsonMap } from "@iarna/toml";
import fs from "fs";
import makeServiceWorkerEnv from "service-worker-mock";
import { checkEnv } from "./helpers";

// set up global namespace for worker environment
declare let global: any;
Object.assign(global, makeServiceWorkerEnv());

// read and parse wrangler.toml
const content = fs.readFileSync("wrangler.toml", "utf8");
const wranglerToml = TOML.parse(content);

// load environmental variables
const devEnv = wranglerToml.vars as JsonMap;
const prodEnv = ((wranglerToml.env as JsonMap).production as JsonMap)
    .vars as JsonMap;

describe("environmental variables", () => {
    it("development env is valid", async () => {
        Object.assign(global, devEnv);
        checkEnv();
    });

    it("production env is valid", async () => {
        Object.assign(global, prodEnv);
        checkEnv();
    });
});

// set environmental variables from dev environment
Object.assign(global, devEnv);
