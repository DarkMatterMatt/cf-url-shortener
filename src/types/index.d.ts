type NestedHandler = (
    request: Request,
    remainingPath: string,
) => Promise<Response>;
