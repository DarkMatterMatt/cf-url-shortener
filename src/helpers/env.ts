import { getAuthorizedEmailRegex } from "./auth";

export function checkEnv() {
    // check regex is valid
    getAuthorizedEmailRegex();
}
