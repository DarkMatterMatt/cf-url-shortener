/**
 * Normalizes keys in object to lowercase. Handling of duplicate normalized
 * keys is undefined.
 * @param {Record<string, T>} obj Object to normalize the keys of
 */
export function objKeysToLowercase<T>(obj: Record<string, T>): Record<string, T> {
    return Object.fromEntries(
        Object.entries(obj)
            .map(([k, v]) => [k.toLowerCase(), v])
    );
}
