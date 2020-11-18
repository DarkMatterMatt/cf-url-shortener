type ApiResponse = (
    options: ApiError | ApiSuccess,
) => Promise<Response>;

export const createResponse: ApiResponse = async (options) => {
    if (options.status === "success") {
        const { status, result } = options;
        const json = { status, result };
        return new Response(JSON.stringify(json));
    }

    const { status, message, httpCode } = options;
    const json = { status, message };
    return new Response(JSON.stringify(json), {
        status: httpCode,
    });
};
