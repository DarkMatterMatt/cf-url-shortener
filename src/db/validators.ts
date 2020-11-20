export function parseShortName(shortName: any): string | Error {
    if (typeof shortName !== "string") {
        return new Error("shortName must be a string");
    }
    // TODO: normalize string
    return shortName;
}
