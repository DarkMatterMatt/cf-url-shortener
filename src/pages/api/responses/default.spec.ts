import { expect } from "chai";
import { createResponse } from "./default";

describe("createResponse", () => {
    it("creates a successful response", async () => {
        const json: ApiSuccess = {
            status: "success",
            result: 1,
        };
        const response = await createResponse(json);
        expect(response.status).equal(200);

        const text = await response.text();
        expect(text).equal(JSON.stringify(json));
    });

    it("creates an error response", async () => {
        const json: ApiError = {
            status: "error",
            message: "testing",
            httpCode: 400,
        };
        const response = await createResponse(json);
        expect(response.status).equal(400);

        const text = await response.text();
        expect(text).equal(JSON.stringify(json));
    });
});
