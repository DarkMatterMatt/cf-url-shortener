export function parseShortName(shortName: string): string;
export function parseShortName(shortName: Exclude<string, Primitive>): Error;
export function parseShortName(shortName: any): string | Error;
export function parseShortName(shortName: any): string | Error {
    if (typeof shortName !== "string") {
        return new Error("shortName must be a string");
    }
    return normalizeRedirect(shortName);
}

/**
 * Normalize redirect identifier.
 * @returns lowercase identifier, without whitespace or symbols
 */
export function normalizeRedirect(s: string): string {
    return s
        .toLowerCase()
        .trim()
        .replace(/[\s-]+/g, "-")
        .replace(/[^\w-]/g, "");
}
