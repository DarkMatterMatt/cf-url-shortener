type ApiResponse = (options: ApiError | ApiSuccess) => Response;

export const createResponse: ApiResponse = async (options) => {
    return new Response(JSON.stringify(options), {
        status: options.status === "success" ? 200 : options.httpCode,
    });
};
