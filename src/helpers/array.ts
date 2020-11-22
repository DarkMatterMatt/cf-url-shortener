/**
 * Same as array.map(), but allows an async callback function
 * @param arr Array to map over
 * @param fn  Callback function to transform item
 */
export function asyncMap<T, U>(
    arr: T[],
    fn: (value: T, index: number, array: T[]) => Promise<U>
): Promise<U[]> {
    return Promise.all(
        arr.map(async (item, index) => await fn(item, index, arr))
    );
}
