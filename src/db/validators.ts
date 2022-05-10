export function parseShortName(shortName: Exclude<string, Primitive>): Error;
export function parseShortName(shortName: any): string | Error;
export function parseShortName(shortName: any): string | Error {
    if (typeof shortName !== "string") {
        return new Error("shortName must be a string");
    }
    if (shortName === "" || shortName === "/") {
        return "/";
    }
    const normalized = normalizeRedirect(shortName);
    if (normalized === "" || normalized === "-") {
        return new Error(
            "shortName must contain at least one alpha-numeric character"
        );
    }
    return normalized;
}

/**
 * Normalize redirect identifier.
 * @returns lowercase identifier, without whitespace or symbols
 */
export function normalizeRedirect(s: string): string {
    return s
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s-]+/g, "-");
}
