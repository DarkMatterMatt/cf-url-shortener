export function checkEnv() {
    // check regex is valid
    new RegExp(AUTHORIZED_EMAIL_REGEX, "iu");
}
